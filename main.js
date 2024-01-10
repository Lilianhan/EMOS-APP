import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()

let baseUrl="http://192.168.1.138:8080/emos-wx-api"

Vue.prototype.url={
	register:baseUrl+"/user/register",
	login:baseUrl+"/user/login"
}

Vue.prototype.ajax = function(url,method,data,fun) {
	//console.log(data)
	uni.request({
		"url":url,
		"method":method,
		"header":{
			token: uni.getStorageSync("token")
		},
		"data":data,
		success:function(resp){
			if(resp.statusCode==401){
				uni.redirectTo({
					url:"/pages/login/login.vue"
				})
			}
			else if(resp.statusCode == 200 && resp.data.code == 200){
				let data=resp.data
				if(data.hasOwnProperty("token")){
					let token = data.token
					console.log("Got a new token: "+token)
					uni.setStorageSync("token",token)
				}
				fun(resp)
			}
			else{
				uni.showToast({
					icon:"none",
					title:resp.data
				})
			}	
		}
	})
	
}

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif