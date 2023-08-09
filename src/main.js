/*
 * @Author: h2qisme 874175299@qq.com
 * @Date: 2023-08-04 15:05:01
 * @LastEditors: h2qisme 874175299@qq.com
 * @LastEditTime: 2023-08-04 15:23:42
 * @FilePath: \vue_test\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入vue
import Vue from 'vue'
//引入app组件，他是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建vue实例对象
new Vue({
  el: '#app',
  render: (h) => h(App),
})
