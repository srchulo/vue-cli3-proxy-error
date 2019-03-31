module.exports = {
  devServer: {
    host: '0.0.0.0',
    public: '0.0.0.0:8080',
    disableHostCheck: true,
    proxy: {
      '/app': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
}
