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
            gzip: true,
            gzipFilePattern: '_nuxt/*.js',
            uploadConcurrency: 5,
            pluginVersion: '4.0.0-rc2',
            enableCloudfront: process.env.CLOUDFRONT_ENABLE === 'true',
            cloudfrontId: process.env.CLOUDFRONT_ID,
            cloudfrontMatchers: '/*'
        }
    }
}
