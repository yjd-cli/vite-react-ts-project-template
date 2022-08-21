module.exports = {
  // 这个不设置的话，webpack 魔法注释会被删除
  comments: true,
  presets: [],
  plugins: [
    //'@babel/plugin-syntax-dynamic-import',
    //'@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
