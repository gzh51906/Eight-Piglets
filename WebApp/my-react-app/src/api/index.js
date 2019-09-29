import axios from 'axios';

//发送数据请求获取首页子导航数据
async function gettag(params){
   let {data:{data:datas}} = await axios.get(`http://localhost:1906/tag/get/${params}`); 
   return datas;
}
//注册
async function adduser(params){
   let res = await axios.post('http://localhost:1906/user/add',params); 
   return res;
}
//查询通过用户名查询用户数据
async function finduser(params){  
   let res = await axios.get(`http://localhost:1906/user/get/${params}`);
   return res;
}
//登录校验
async function login(params){
  
  let res = await axios.post('http://localhost:1906/user/login',params);
   return res;
}
//校验token
async function checkToken(){
   let authorization = localStorage.getItem('authorization');
   let {data:{data:{authorization:res}}} = await axios.get('http://localhost:1906/verify',{
      headers:{
          Authorization:authorization
      }
   })
   //console.log('active');
   return res;
}
//达人
async function guide(){
   let {data:{data}}= await axios.get('http://localhost:1906/guide');
   return data;
}
export default{
   gettag,
   adduser,
   finduser,
   login,
   checkToken,
   guide
}