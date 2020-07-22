/* eslint-disable */

const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname,'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() //表示此规则仅包含icons目录
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(option => ({ ...option,plugins: [{ removeAttrs: { attrs: 'fill' } }] })).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'),[{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir)//其他svg loader排除icons目录
  }
}
