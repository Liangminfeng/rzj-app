import Vue from 'vue';
import App from './App.vue';
import router from '../router/router.js';
import 'vant/lib/index.css';
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
	router,
	created() {
		
	}
}).$mount('#app');
