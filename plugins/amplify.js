import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import AwsExports from '~/aws-exports'

Amplify.configure(AwsExports)
Vue.use(AmplifyPlugin, AmplifyModules)
