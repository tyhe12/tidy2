module.exports = {
    pluginOptions: {
        s3Deploy: {
            awsProfile: 'default',
            region: 'us-west-1',
            bucket: 'dev.cleaningwithcooley.com',
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
            enableCloudfront: false,
            cloudfrontId: '',
            cloudfrontMatchers: '/*'
        }
    }
}
