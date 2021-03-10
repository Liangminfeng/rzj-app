
	<template>
	  <div class="search_index">
			<div id="navbar_model">
				<van-nav-bar
				  title="商品详情"
				  left-text=""
				  left-arrow
				  @click-left="onClickLeft"
				/>
			</div>
			<div class="header_design">
				<div class="banner">
					<van-swipe class="my-swipe2" :autoplay="3600" indicator-color="white">
					  <van-swipe-item v-for="(image, index) in images" :key="index">
					    <img v-lazy="image" width="100%" height="100%"/>
					  </van-swipe-item>
					</van-swipe>
				</div>
				<div class="shoppname">
					<div class="price">￥14999.00</div>
					<div class="shoppname_item">
						<label>航天三发 深紫外LED空气消毒机 航天品质科技防疫无公害消毒安全环保除甲醛过敏源病毒2代空气消毒机</label>
						<label>
							<div class="iconfont icon-share"></div>
							<p>分享赚佣金</p>
						</label>
					</div>
					</div>
					<!-- 规格 -->
					<div class="sku_params_item">
						<van-cell is-link title="商品规格: 整头猪/138斤" @click="show = true" />
						<van-sku
						  v-model="show"
						  :sku="sku"
						  :goods="goods"
						  :goods-id="sku.goodsId"
						  
						  :hide-stock="sku.hide_stock"
						  :custom-stepper-config="customStepperConfig"
						  @buy-clicked="onBuyClicked"
						  @add-cart="onAddCartClicked"
						/>
					</div>
					<div class="detail_content">
						<van-cell value="商品描述" />
						<div class="image" v-for="(image,key) in content" :key="key">
							<img :src="image" alt="" width="100%" height="100%">
						</div>
					</div>
				
			</div>
			<div class="bottom_nav">
				<div class="icon_components">
					<van-goods-action>
					   <van-goods-action-icon icon="home-o" text="店铺" />
					    <van-goods-action-icon icon="user-o" text="客服"  />
					    <van-goods-action-icon icon="shopping-cart-o" text="购物车"  />
					    <van-goods-action-button type="warning" color="rgb(237,42,72)" text="加入购物车" style="margin-left:2rem;"/>
					    <van-goods-action-button type="danger" color="rgb(239,122,8)" text="立即购买" />
					</van-goods-action>
				</div>

			</div>
		</div>
	</template>
<script src="../../assets/script/details.js"></script>