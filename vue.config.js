module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "~@/sass/main.scss"'
            },
            scss: {
                data: '@import "~@/sass/main.scss";'
            }
        }
    },
    pluginOptions: {
        s3Deploy: {
            awsProfile: 'default',
            region: 'us-west-1',
            bucket: 'dev.cleaningwithcooley.com',
            createBucket: false,
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
    },
    transpileDependencies: ['vuetify']
}
