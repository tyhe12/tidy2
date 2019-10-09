const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-2'
})
const uuid = require('uuid/v4')

exports.handler = async event => {
    const params = {
        Item: {
            ReviewId: {
                S: uuid()
            },
            Review: {
                S: event.review
            },
            Title: {
                S: event.title
            },
            Rating: {
                N: event.rating
            },
            User: {
                S: event.user
            },
            Approved: {
                BOOL: true
            }
        },
        TableName: 'cleaning-reviews'
    }
    await dynamodb
        .putItem(params)
        .promise()
        .catch(err => {
            console.log(err, err.stack)
            return {
                statusCode: 500,
                message: 'Post failed'
            }
        })

    return {
        statusCode: 200,
        message: 'Successfully post review'
    }
}
