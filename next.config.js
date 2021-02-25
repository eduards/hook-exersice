module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(csv|tsv)$/i,
      use: ['csv-loader'],
    })
    
    return config
  },
}