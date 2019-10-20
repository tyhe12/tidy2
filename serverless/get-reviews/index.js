const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-2'
})

exports.handler = async () => {
    const params = {
        TableName: 'cleaning-reviews'
    }
    const reviewQuery = await dynamodb
        .scan(params)
        .promise()
        .catch((err) => {
            console.log(err)
        })
    const reviews = reviewQuery.Items.filter(
        (element) => element.Approved.BOOL
    ).map((element) => ({
        review: element.Review.S,
        title: element.Title.S,
        rating: parseInt(element.Rating.N, 10)
    }))

    const response = {
        statusCode: 200,
        body: {
            reviews
        }
    }
    return response
}
