<template>
  <div id="my_pages">
		<!-- 头部 -->
    <div id="head_pinks_bg">
			<van-nav-bar title="个人中心"/>
			<div class="users_layout">
				<div id="image">
					<img src="../../assets/tabBar/user_phone.jpg" alt="" width="auto" height="auto">
				</div>
				<div id="users">梁民锋</div>
			</div>
		</div>
		<!-- 主要内容 -->
		<div id="main_layout">
			<div class="my_order_nav">
				<van-cell value="全部订单" is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">我的订单</span>
					</template>
				</van-cell>
				<van-divider />
				<div class="delivery_order_item">
				 <div class="item">
					 <i class="iconfont icon-pay ico_layout"></i>
					 <div id="pay_title">
						 待付款
					 </div>
				 </div>
				 <div class="item">
						 <i class="iconfont icon-delivery ico_layout"></i>
						 <div id="pay_title">
							 待发货
						 </div>
				 </div>
				 <div class="item">
						 <i class="iconfont icon-take ico_layout"></i>
						 <div id="pay_title">
							 待收货
						 </div>
					</div>
				</div>
			</div>
			
			<div class="jiankang_home">
				<van-cell value="健康小屋" />
				<van-divider />
				<div class="delivery_order_item">
				 <div class="item">
					 <i class="iconfont icon-calendar ico_layout"></i>
					 <div id="pay_title">
						 预约记录
					 </div>
				 </div>
				 <div class="item">
						 <i class="iconfont icon-royal ico_layout"></i>
						 <div id="pay_title">
							 会员专区
						 </div>
				 </div>
				 
				</div>
			</div>
				
				<div class="address_div">
					<van-cell title="收货地址" icon="location-o" is-link />
				</div>
				<div class="logout_btn">
					<van-button type="primary" size="large" color="rgb(254,16,97)">退出登录</van-button>
				</div>
		</div>
		<!-- 底部导航 -->
		<div id="tabbar_item">
			<Tabbar></Tabbar>
		</div>
  </div>
</template>

<script src="../../assets/script/my.js"></script>
