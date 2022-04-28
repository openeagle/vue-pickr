module.exports = {
  configureWebpack: {
    output: {
      library: 'VuePickr',
      libraryExport: 'default'
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
