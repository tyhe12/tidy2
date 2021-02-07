const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-2'
})
const uuid = require('uuid/v4')

exports.handler = async (event) => {
    // invalidate all valid slots
    const params = {
        TableName: 'cleaning-schedules'
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
        message: 'Successfully post review'
    }
}
