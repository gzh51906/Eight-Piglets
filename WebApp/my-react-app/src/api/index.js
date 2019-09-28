import axios from 'axios';

//发送数据请求获取首页子导航数据
async function gettag(params){
   let {data:{data:datas}} = await axios.get(`http://localhost:1906/tag/get/${params}`); 
   return datas;
}
//注册
async function adduser(params){
   // console.log(params,'params');
   let res = await axios.post('http://localhost:1906/user/add',params);
   // console.log(res,'api');
   return res;
}
//查询通过用户名查询用户数据
async function finduser(params){
   // console.log(params,'finduser');
   let res = await axios.get(`http://localhost:1906/user/get/${params}`);
   // console.log(res,'res');
   return res;
}
//登录校验
async function login(params){
   console.log(params,"login");
   let res = await axios.post('http://localhost:1906/user/login',params);
   console.log(res,'login');
   return res;
}

export default{
   gettag,
   adduser,
   finduser,
   login
}