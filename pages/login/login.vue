<template>
	<view>
		<image src="../../static/logo-1.png" class="logo" mode="widthFix"></image>
		<view class="logo-title">WELCOME EMOS-OA</view>
		<view class="logo-subtitle">Ver 2024.1</view>
		<button class="login-btn" open-type="getUserInfo" @tap="login()">Login</button>
		<view class="register-container">
			没有账号？
			<text class="register" open-type="getUserInfo" @tap="toRegister()">立即注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toRegister:function(){
				uni.navigateTo({
					url:"/pages/register/register"
				})
			},
			login: function(){
			    let that = this;
			    
			    uni.login({
			        provider: 'weixin',
			        success: function(resp) {
			            let code = resp.code;
						console.log(code);
						that.ajax(that.url.login, "POST",{"code":code}, function(resp) {
						    let permission = resp.data.permission;
							console.log(permission);
						    uni.setStorageSync('permission', permission);
						});
						uni.switchTab({
						    url: '../index/index'
						});
			        },
					fail: function(e){
						console.log(e)
						uni.showToast({
							icon:"none",
							title:"出现异常！！"
						})
						
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("login.less");
</style>
