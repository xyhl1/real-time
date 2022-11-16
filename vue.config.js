const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
        '/socket': {
            target: 'http://localhost:3000',
            pathRewrite: {
                // '^/socket': ''
            },
            ws: true,
            changeOrigin: true
        },
    }
},
})
