<template>
	<div id="Tabbar" >
		<van-tabbar v-model="active" route>
		  <van-tabbar-item replace url="/store">
		    <span>首页</span>
		    <template #icon="props">
						<img :src="props.active ? icon.active : icon.inactive" />
				</template>
		  </van-tabbar-item>
		  <van-tabbar-item icon="search" replace url="/store/categoryList">
				<span>分类</span>
				<template #icon="props">
				  <img src="../assets/tabBar/cate.png" />
				</template>
			</van-tabbar-item>
		  <van-tabbar-item icon="setting-o" replace url="/store/cart">
				<span>购物车</span>
				<template #icon="props">
				  <img src="../assets/tabBar/cart.png" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace url="/store/my">
				<span>我的</span>
				<template #icon="props">
				  <img src="../assets/tabBar/user.png" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
		
</template>
<style>
	
</style>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { Notify } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
			icon: {
				active: '../src/assets/tabBar/home_on.png',
				inactive: '../../src/assets/tabBar/home_on.png',
			},
			active: 0,
		};
  },
	methods:{}
};
</script>
<style>
	div#Tabbar .van-tabbar-item--active{
		color: #ed6a73;
		background-color: #fff;
	}
	#Tabbar{
		border-radius:1rem;
		overflow: hidden;
		
	}
	.van-tabbar-item__icon img {
	    display: block;
	    height: 35px;
	}
	.van-tabbar--fixed {
	    padding-top: 5px;
	}
	.van-tabbar-item__text{
		padding-bottom:8px;
	}
</style>