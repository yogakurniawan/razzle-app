module.exports = {
  modify: (config, { target, dev }, webpack) => {
    if (target === 'web') {
      const newConfig = {
        optimization: {
          splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all',
              },
              main: {
                chunks: 'all',
                minChunks: 2,
                reuseExistingChunk: true,
                enforce: true,
              },
            },
          },
          runtimeChunk: true,
        }
      }
      const theConfig = { ...config, ...newConfig }
      return theConfig
    }
    return config;
  }
}