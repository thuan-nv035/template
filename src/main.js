import Vue from 'vue'
import App from './App.vue'
// import './index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('formatCurrency', function(money) {
  let formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return formatter.format(money);
})