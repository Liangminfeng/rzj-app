
	<template>
	  <div class="search_index">
			<div id="navbar_model">
				<van-nav-bar
				  title="搜索"
				  left-text=""
				  left-arrow
				  @click-left="onClickLeft"
				/>
			</div>
			<div class="search_model">
				<van-search v-model="value" id="search_1" background="#F7F7F7" placeholder="商品名称" />
				<van-button color="#FF495E" type="primary">搜索</van-button>
			</div>
			<div class="search_shopp"></div>
		</div>
	</template>


<script>
	import Vue from 'vue';
	import { NavBar } from 'vant';
	import { Search } from 'vant';
	import { Button } from 'vant';
	import "@/assets/css/search.css"
	Vue.use(Button);
	Vue.use(Search);
	Vue.use(NavBar);
	export default {
	  methods: {
	    onClickLeft() {
	      Toast('返回');
	    },
	    
	  },
	};
</script>
