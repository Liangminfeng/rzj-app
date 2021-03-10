
<template>
	<div class="Categoryitem_design">
		<div id="navbar">
			<van-nav-bar
			  title="购物车"
			/>
		</div>
		<div id="likes_item">
			
			<!-- 我有底线 -->
			<div id="likes_item_name">——————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猜你喜欢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——————</div>
			<div id="jingsuan">
				<div class="like_inlineflex_item" v-for="(values,keys) in likeitem" :key="keys" v-if="keys <= 7 ">
					
					<div class="shopp" :data-id="values.id" @click="godetails(values.id)" >
						<div id="thumbnail">
							<img :src="values.main_url_web">
						</div>
						<div id="param">
							<span id="shopp_name">{{values.title}}</span>
							<div class="money_layout">
								<span id="price"><i id="price_icon">￥</i>{{values.price}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 我有底线 -->
		<div id="finshlines">——————&nbsp;&nbsp;我有底线&nbsp;&nbsp;——————</div>	
		<!-- 底部导航 -->
		<div id="tabbar_item">
			<Tabbar></Tabbar>
		</div>
	</div>
</template>
<script src="../../assets/script/addcart.js"></script>
