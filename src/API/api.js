import Vue from 'vue'
import axios from 'axios'

export default {
  // 获取产品列表--post
  listGoods: function (data) {
  	 return axios.post({
	    url: '/veg/list',
	    method: 'post',
	    data
	  })
  },
  // 获取地址列表--get
//listArea: function () {
// return axios.get({
//	    url: '/user/getArea',
//	    method: 'get'
//	  })
//}  
}