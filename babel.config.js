module.exports = function (api) {
    api.cache.forever();
        return {
        plugins: [
          'macros',
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        ],
      }
    }