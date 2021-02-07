const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-2'
})

exports.handler = async ({ Records }) => {
    const promises = Records.map((record) => {
        const { body } = record
        const { slot } = JSON.parse(body)
        // check availability
        // get slot && check slot availability
        const slotParams = {
            Key: {
                slotId: {
                    S: slot
                }
            },
            TableName: 'cleaning-schedules'
        }

        return dynamodb.getItem(slotParams).promise()
    })
    const slotsResult = await Promise.all(promises)
    const slots = slotsResult.map(({ Item: slot }) => {
        return {
            slotId: slot.slotId.S,
            reserved: slot.reserved.BOOL
        }
    })

    if (slots.length <= 0) {
        return {
            statusCode: 200,
            message: 'Unavailable slot'
        }
    }
    const orderPromises = Records.map((record, idx) => {
        const { body, messageAttributes } = record
        const slot = slots[idx]
        const { items, price, date, address } = JSON.parse(body)
        const id = messageAttributes.id.stringValue

        if (slot.reserved) return Promise.resolve() // already reserved

        const cleanParams = {
            Item: {
                CustomerId: {
                    S: id
                },
                CleanId: {
                    S: uuid()
                },
                Address: {
                    S: address
                },
                Date: {
                    S: date
                },
                Items: {
                    SS: items
                },
                Price: {
                    N: `${price}`
                }
            },
            TableName: 'cleaning-cleans'
        }
        // make sure to edit slot info to false
        const updateParams = {
            ExpressionAttributeNames: {
                '#R': 'reserved',
                '#U': 'userId'
            },
            ExpressionAttributeValues: {
                ':r': {
                    BOOL: true
                },
                ':u': {
                    S: id
                }
            },
            Key: {
                slotId: {
                    S: slot.slotId
                }
            },
            TableName: 'cleaning-schedules',
            UpdateExpression: 'SET #R = :r, #U = :u'
        }

        return [
            dynamodb.updateItem(updateParams).promise(),
            dynamodb.putItem(cleanParams).promise()
        ]
    })
    await Promise.all(orderPromises.flat())

    return {
        statusCode: 200,
        message: 'Successfully created orders'
    }
}
