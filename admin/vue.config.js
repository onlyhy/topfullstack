/*
 * @Date: 2020-04-26 15:22:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-26 15:46:22
 */
module.exports = {
  devServer: {
    port: 5565,
    overlay: { // 这里配置 html 页面是否显百示 eslint 错误信息度蒙版 
      errors: false,
      warnings: false
    }
  }
}
