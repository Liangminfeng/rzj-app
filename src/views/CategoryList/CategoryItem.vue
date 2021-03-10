
<template>
	<div class="Categoryitem_design">
		<div id="search">
			<div id="header_name">商品分类</div>
		</div>
		<div id="likes_item">
		<van-sidebar v-model="activeKey">
		  <van-sidebar-item title="标签名称" />
		  <van-sidebar-item title="标签名称" />
		  <van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
		</van-sidebar>
		<!-- shopp -->
			<div id="Category_div">
				<div v-for="(values,keys) in likeitem" :key="keys" v-if="keys <= 7 ">
					
					<div class="shopp" :data-id="values.id">
						<div id="thumbnail">
							<img :src="values.main_url_web">
						</div>
						<div id="param">
							<span id="shopp_name">{{values.title}}</span>
							
							<div class="money_layout">
								<span id="price"><i id="price_icon">￥</i>{{values.price}}</span>
								<span id="market_price"><i id="price_icon1">￥</i>{{values.market_price}}</span>
							</div>
							<div class="shopp_cart" >
								<van-button round color="linear-gradient(to right, #FF7101, #ED2A48)">
								  加入购物车
								</van-button>
							</div>
						</div>
					</div>
				</div>
				<!-- 我有底线 -->
				<div id="finshlines">——————&nbsp;&nbsp;我有底线的&nbsp;&nbsp;——————</div>
			</div>
		</div>
		
		<!-- 底部导航 -->
		<div id="tabbar_item">
			<Tabbar></Tabbar>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Sidebar, SidebarItem } from 'vant';
	import "@/assets/css/categoryitem.css";
	import {Tabbar} from "../../assets/script/";
	import { Button } from 'vant';
	Vue.use(Button);
	Vue.use(Sidebar);
	Vue.use(SidebarItem);
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
</script>
