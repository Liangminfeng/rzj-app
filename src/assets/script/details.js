"use strict";
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Lazyload } from 'vant';
import VueResource from 'vue-resource';
import { Icon } from 'vant';
import '../../assets/css/details.css';
import { Toast } from 'vant';
import { ActionSheet } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Sku } from 'vant';
import _sku from '../../../vimdata/sku.js';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(VueResource);
Vue.use(ActionSheet);
Vue.use(Sku)
export default {
		data() {
			return {
				show: false,
				sku:_sku.sku,
				initialSku:{
					// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
					// 值：skuValueId（规格值 id）
					s1: '1',
					s2: '1',
					// 初始选中数量
					selectedNum: 3,
					// 初始选中的商品属性
					// 键：属性id
					// 值：属性值id列表
					selectedProp: {
						123: [1222]
					}
				},
				goods: {
				  // 默认商品 sku 缩略图
				  picture: 'https://cdn.yjwysj.cn/images/937b10d43f18a41774b327b585dd66c1.jpg'
				},
				messageConfig:{
					
				},
				content:[
					"https://cdn.yjwysj.cn/images/394071080e0a5f565f6a52970db0d8a5.jpg",
					"https://cdn.yjwysj.cn/images/c1765897259bb0594334c41f31a97e20.jpg",
					"https://cdn.yjwysj.cn/images/278bba1d4b6e526ad2ca9e4073df95bf.jpg",
					"https://cdn.yjwysj.cn/images/b2d7f92e3f52dc7f51f1e2d93bd04902.jpg",
					"https://cdn.yjwysj.cn/images/90d9259189b88311bddf3cbac9b48721.jpg",
					"https://cdn.yjwysj.cn/images/c150ee3312f67eb0361958050c6ae952.jpg"
				],
				images: [
					"https://cdn.yjwysj.cn/images/937b10d43f18a41774b327b585dd66c1.jpg",
					"https://cdn.yjwysj.cn/images/52db37b688df3a6a4a6d3ebb0e57f440.jpg",
					"https://cdn.yjwysj.cn/images/5907d5450f5e09cb11663831ce8d1563.jpg",
					"https://cdn.yjwysj.cn/images/179afc9aad8d234c1a6ec19514f5cb34.jpg"
				],
			};
		},
	  methods: {
	    onClickLeft() {
	      Toast('点击图标');
	    },
	    swipe(){
	    	this.$http.get("https://api.rezhuangzi.com/api/shop/index").then((response) => {
	    	  if(response.status == 200){
						
	    			//this.images = response.body.data.banner;
	    		}
	    	}, (error) => {
	    	  console.log('error:', error)
	    	});
	    },
			onBuyClicked(){
				
			},
			onAddCartClicked(){
				
			},
			onPointClicked(){
					
			}
	  },
		created() {
			this.swipe();
			
		}
	};