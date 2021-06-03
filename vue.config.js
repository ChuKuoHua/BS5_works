module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      const [obj] = args;
      obj.title = '拼拼 - 魔法科技';
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/BS5_works/'
    : '/'
};