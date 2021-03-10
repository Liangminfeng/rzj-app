<template>
  <div id="index_page">
		<!-- 头部 -->
    <div id="head_pinks_bg">
			<SearchComponents></Searchcomponents>
		</div>
		<!-- 主要内容 -->
				<div id="main_layout">
						<div id="ba_pink_2"></div>
						<!-- swipe -->
						<div id="swipe_img">
							<van-swipe class="my-swipe" :autoplay="3600" indicator-color="white">
							  <van-swipe-item v-for="(image, index) in images" :key="index" :id="image.id">
							    <img v-lazy="image.slider_img_url" />
							  </van-swipe-item>
							</van-swipe>
						</div>
						<!-- Categorylist -->
						<div id="navigation_item">
							<div v-for="(navig,key) in navigations" :key="navig.id" v-if="key <= 9">
								<div class="navigation_item_name" :id="navig.id" @click="linkTo(navig.id)">
									<div class="img">
										<img :src="navig.imgurl"/>
									</div>
									<div style="font-size:0.25rem;">{{navig.name}}</div>
								</div>
							</div>
						</div>
						<!-- 今日精选 -->
						<div id="jingsuan_shopp">
							<div id="jingsuan">
								<div id="like_item_name">
									<h3 align="left"><strong>今日精选</strong></h3>
								</div>
								<div v-for="(values,keys) in jsitem.list" :key="keys" v-if="keys <= 7 ">
									
									<div class="shopp" :data-id="values.id" @click="godetails(values.id)">
										<div id="thumbnail">
											<img :src="values.main_url_web">
										</div>
										<div id="param">
											<span id="shopp_name">{{values.title}}</span>
											<div class="sale_count">
												月销量 {{values.sales_count}}
											</div>
											<div class="money_layout">
												<span id="price"><i id="price_icon">￥</i>{{values.price}}</span>
												<span id="market_price"><i id="price_icon1">￥</i>{{values.market_price}}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 热门热卖 -->
						<div id="hot_shopp">
							<div id="jingsuan">
								<div id="like_item_name">
									<h3 align="left"><strong>热门热卖</strong></h3>
								</div>
								<div v-for="(values,keys) in hotitem.list" :key="keys" v-if="keys <= 7 ">
									
									<div class="shopp" :data-id="values.id" @click="godetails(values.id)">
										<div id="thumbnail">
											<img :src="values.main_url_web">
										</div>
										<div id="param">
											<span id="shopp_name">{{values.title}}</span>
											<div class="sale_count">
												月销量 {{values.sales_count}}
											</div>
											<div class="money_layout">
												<span id="price"><i id="price_icon">￥</i>{{values.price}}</span>
												<span id="market_price"><i id="price_icon1">￥</i>{{values.market_price}}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 猜你喜欢 -->
						<div id="likes_item">
							<div id="jingsuan">
								<div id="like_item_name">
									<h3 align="left"><strong>猜你喜欢</strong></h3>
								</div>
								<div v-for="(values,keys) in likeitem" :key="keys" v-if="keys <= 7 ">
									
									<div class="shopp" :data-id="values.id" @click="godetails(values.id)" >
										<div id="thumbnail">
											<img :src="values.main_url_web">
										</div>
										<div id="param">
											<span id="shopp_name">{{values.title}}</span>
											<div class="sale_count">
												月销量 {{values.sales_count}}
											</div>
											<div class="money_layout">
												<span id="price"><i id="price_icon">￥</i>{{values.price}}</span>
												<span id="market_price"><i id="price_icon1">￥</i>{{values.market_price}}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 我有底线 -->
						<div id="finshlines">——————&nbsp;&nbsp;我有底线的&nbsp;&nbsp;——————</div>
				</div>
		<!-- 底部导航 -->
		<div id="tabbar_item">
			<Tabbar></Tabbar>
		</div>
  </div>
</template>

<script>
import 'vant/lib/index.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Col, Row } from 'vant';
import Router from "../../../router/router";
import {SearchComponents,Tabbar} from "../../assets/script/";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VueResource);
Vue.use(Lazyload);
Vue.use(Col);
Vue.use(Row);
export default {
  name: 'appcation',
  components: {
		SearchComponents,
		Tabbar
  },
	data() {
	  return {
	    images: [],
			jsitem:[],
			hotitem:[],
			likeitem:[],
			navigations:[]
	  };
	},
	methods: {
		linkTo(cId){
			this.$router.push({
				path: '/store/categoryList', query: { cId },
			})
		},
		swipe(){
			this.$http.get("https://api.rezhuangzi.com/api/shop/index").then((response) => {
			  if(response.status == 200){
					this.images = response.body.data.banner;
					this.jsitem = response.body.data.products[1];
					this.hotitem = response.body.data.products[2];
				}
			}, (error) => {
			  console.log('error:', error)
			});
		},
		Categoryitem(){
			this.$http.get("https://api.rezhuangzi.com/api/shop/catelist").then((response) => {
					if(response.status == 200 && response.body.error_code == 10000){
							this.navigations = response.body.data;
					}
			  }, (error) => {
			    console.log('error:', error)
			  })
			},
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
			},
			godetails(id){
				this.$router.push({path: '/store/details',query: { id }})
			}
	},
	created () {
	  this.swipe();
		this.Categoryitem();
		this.getmore();
	}
}
</script>

<style>
#index_page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
	width:100%;
	max-width: 520px;
	margin:0 auto;
	background:#F7F7F7;
	display: block;
}
#head_pinks_bg {
	width: 100%;
	max-width:520px;
	background-color:#F97777;
	/* border-radius:0px 0px 4rem 4rem; */
	height:96px;
	position: fixed;
	top:0px;
	z-index:8888;
}
#main_layout{
	position:relative;
	top:109px;
	display: block;
	width:100%;
	margin:0 auto;
	margin-bottom: 10rem;
	background: #F7F7F7;
	padding-bottom:1rem;
}
#main_layout #ba_pink_2{
	width: 100%;
	max-width:520px;
	background-color:#F97777;
	height:116px;
	border-radius:0rem 0rem 4rem 4rem;
	position:absolute;
	top: -13px;
}
#tabbar_item{
	position: fixed;
	width:100%;
	max-width:520px;
	bottom:0rem;

}
#jingsuan_shopp{
	margin-bottom:1rem;
}
#hot_shopp{
	margin-bottom:1rem;
}
#likes_item{
	margin-bottom:0rem;
}
#finshlines{
	display:block;
	color:#E0E2E4;
	font-size:1rem;
	text-align:center;
	padding:0.55rem 0rem 3.5rem 0rem;
}

/* BANNER */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
		border-radius:1rem;
		height:100%;
		max-height:189px;
  }
	.my-swipe .van-swipe-item img{
		width:100%;
		height:100%;
	}
	#swipe_img{
		border-radius:1rem;
		overflow: hidden;
		width:100%;
		max-width:489px;
		margin:0 auto;
		cursor: pointer;
	}
	
	/* 分类列表 */
		#navigation_item{
			margin:1.4rem auto 0.9rem auto;
			width:100%;
			max-width:490px;
			display:flex;
			flex-wrap:wrap;
		}
		#navigation_item > div {width: 20%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 0 .25rem;}
		.navigation_item_name{
			width: 100%;
			/* margin: 3px; */
			margin-bottom: 1rem;
			cursor: pointer;
			box-sizing: border-box;
		}
		.navigation_item_name img{
			border-radius:8rem;
			width:100%;
			margin-bottom:0.9rem;
			
		}
		.shopp{
			
		}
		.shopp #thumbnail img{
			width:100%;
		}
		.shopp #param{
			text-align:left;
		}
		.shopp #param .money_layout{
			position:absolute;
			bottom:13px;
		}
		.shopp #param .money_layout i#price_icon{
				text-align:left;
				color: #ff0000;
				font-size: 14px;
				font-style:initial;
			}
		.shopp #param .money_layout i#price_icon1{
				text-align:left;
				color: #666;
				font-size: 14px;
				text-decoration: line-through;
				font-style:initial;
			}
		.shopp #param .money_layout #price{
			text-align:left;
			color: #ff0000;
			font-size: 26px;
			margin-right:9px;
		}
		.shopp #param #shopp_name{
			margin-bottom: 0;
			font-size: 16px;
			line-height: 26px;
			text-align: justify;
			color: #333;
			word-break: break-all;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.shopp #param .sale_count{
			font-size: .8rem;
			line-height: 2.5rem;
			color: #b9b9b9;
			display: block;
			margin-bottom: 0;
		}
		
		.shopp #param .money_layout #market_price{
			text-align:left;
			color: #666;
			font-size: 18px;
			text-decoration: line-through;
		}
		#jingsuan{background:#FFFFFF;padding-right:.9rem}
		#like_item_name{
			padding:0.9rem 0rem 0.9rem 0.9rem;
		}
		h3,strong{paddig:0;margin:0px}
		#jingsuan .shopp{
			width:100%;
			display:block;
			border-top:1px solid #F1EFEE;
			padding:1rem;
			padding-left:0rem;
			padding-right:0rem;
			display:inline-flex;
			cursor:pointer;
			position: relative;
		}
		#jingsuan .shopp #thumbnail{
			width:45%;
			height:auto;
			margin-left:0.7rem;
			margin-right:0.6rem;
		}
		#jingsuan .shopp #param{
			width:80%;
			height:184px;
		}
</style>
