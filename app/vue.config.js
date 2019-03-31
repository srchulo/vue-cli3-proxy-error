module.exports = {
  publicPath: '/app',
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    public: '0.0.0.0:8080/app',
    disableHostCheck: true
  }
}
