require('dotenv').config()

module.exports = {
    pluginOptions: {
        s3Deploy: {
            awsProfile: 'default',
            region: process.env.REGION_NAME,
            bucket: process.env.BUCKET_NAME,
            createBucket: true,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: false,
            uploadConcurrency: 5,
            pluginVersion: '3.0.0',
            enableCloudfront: process.env.CLOUDFRONT_ID !== '',
            cloudfrontId: process.env.CLOUDFRONT_ID,
            cloudfrontMatchers: '/*'
        }
    }
}
