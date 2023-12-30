const { defineConfig } = require('@vue/cli-service')
module.exports = {
 chainWebpack: config =>
  config
    .plugin('feature-flags')
    .use(require('webpack').DefinePlugin, [{
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    }])
}