const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-2'
})

exports.handler = async ({ id, date, address, items, price }) => {
    const params = {
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
                N: price
            }
        },
        TableName: 'cleaning-cleans'
    }
    await dynamodb
        .putItem(params)
        .promise()
        .catch((err) => {
            console.log(err, err.stack)
            return {
                statusCode: 500,
                message: 'Post failed'
            }
        })

    return {
        statusCode: 200,
        message: 'Successfully created an order'
    }
}
