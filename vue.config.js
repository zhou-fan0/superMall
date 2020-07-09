module.exports = {
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        'components': '@/components',
        'assets': '@/assets',
        'views': '@/views',
        'network': '@network',
        'commomn': 'components/common',
        'content': 'components/content'
      }
    }
  }
}