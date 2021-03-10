"use strict";
import Vue from 'vue';
import { NavBar } from 'vant';
import {Tabbar } from './index';
import VueResource from 'vue-resource';
import '../css/addcart.css'; 
Vue.use(NavBar);
Vue.use(VueResource);
export default {
		name:"application",
		components: {
			Tabbar
		},
	  data() {
	    return {
	      activeKey: 0,
				likeitem:[]
	    };
	  },
		methods:{
			getmore(){
				this.$http.get("https://api.rezhuangzi.com/api/shop/more",{params:{
					cate:0,
					page:1,
					pagesize:8,
					sort:0,
					label:3
				}}).then((response) => {
						if(response.status == 200 && response.body.error_code == 10000){
								this.likeitem = response.body.data.data;
						}
				  }, (error) => {
				    console.log('error:', error)
				  })
			}
		},
		created(){
			this.getmore();
		}
	};