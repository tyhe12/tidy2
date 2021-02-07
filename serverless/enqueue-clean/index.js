const AWS = require('aws-sdk')
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

exports.handler = async (event) => {
    // TODO implement
    const { id, date, address, items, price, slot } = event
    const message = {
        items,
        price,
        date,
        address,
        slot
    }
    const params = {
        MessageBody: JSON.stringify(message),
        QueueUrl:
            'https://sqs.us-east-2.amazonaws.com/205208585301/clean-orders',
        MessageAttributes: {
            timestamp: {
                DataType: 'Number',
                StringValue: `${new Date().getTime()}`
            },
            id: {
                DataType: 'String',
                StringValue: id
            }
        }
    }
    try {
        await sqs.sendMessage(params).promise()
    } catch (e) {
        throw e
    }

    const response = {
        statusCode: 200,
        body: 'Clean order created successfully, please wait for confirmation'
    }
    return response
}
