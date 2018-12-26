import Vue from 'vue'
import axios from 'axios'
import GLOBAL_CONFIG from './dev.env.js'

// 设置默认的配置项
const  CONFIG = GLOBAL_CONFIG['GLOBAL_CONFIG'];

axios.defaults.baseURL = "http://dev.api.ghtccs.com";

//添加请求拦截器
axios.interceptors.request.use(function(config){
  // 获取token
    let TOKEN="localStorage.token";
  // 设置token
  if(TOKEN){   
    config.headers['X-ODAPI-Authorization'] = TOKEN;
  }
  // 返回配置项
  return config;

},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){
  // console.log(JSON.stringify(response)); 
  if(response['status'] == 200){
    if(response['data']['error_code'] == 0){
       return response['data']['data'];
    }else{      
      if(response['data'].hasOwnProperty('erron')){
        //mui.toast(response['data']['erron']);
        this.$alert(response['data']['erron'], {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        })
        
      }
      return false;
    }    
  }else{
    //mui.toast('网络错误！');
    this.$alert('网络错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        })
    
  }

},function(error){
  //请求错误时做些事
  return Promise.reject(error);
})
