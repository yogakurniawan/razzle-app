module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // @todo automatic vendor bundle
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // if (target === 'web') {
    //   const newConfig = {
    //     optimization: {
    //       splitChunks: {
    //         chunks: 'all',
    //         name: true,
    //         cacheGroups: {
    //           commons: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name: 'vendor',
    //             chunks: 'all',
    //           },
    //           main: {
    //             chunks: 'all',
    //             minChunks: 2,
    //             reuseExistingChunk: true
    //           },
    //         },
    //       }
    //       // Keep the runtime chunk seperated to enable long term caching
    //       // https://twitter.com/wSokra/status/969679223278505985
    //       // runtimeChunk: true
    //     }
    //   }
    //   return { ...config, ...newConfig };
    // }
    return config;
  },
};