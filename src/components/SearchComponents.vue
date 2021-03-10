<template>
	<div id="search">
		<div id="header_name">热庄子商城</div>
		<van-search v-model="value" shape="round" background="#F97777" placeholder="请输入商品名称" input-align="center" @click="searchpage"/>
	</div>
</template>
<style>
	
</style>
<script>
import Vue from 'vue';
import { Search } from 'vant';
import router from '../../router/router';
import 'vant/lib/search/style';
Vue.use(Search);
export default {
  data() {
    return {
      value: '',
    };
  },
	methods:{
		searchpage(){
			router.push({
				path: '/store/search',
			})
		},
	}
};
</script>
<style>
	#header_name{
		text-alig:center;
		color:#FFFFFF;
		font-size:1rem;
		width:100%;
		padding:0.5rem 0 0.6rem 0rem;
	}
</style>