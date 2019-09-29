import React,{Component} from 'react'
import {Icon} from 'antd'
//引入外部样式
import '@/style/reg.scss';
//引入数据请求接口
import Api from '../api'
//引入高阶组件
import {connect} from 'react-redux';
class Login extends Component{
     //初始化时禁止登陆按钮
     componentDidMount(){
         //disabled 为true时为禁止选中状态
         this.refs.btn.dsiabled = true;
     }
     //返回首页
     goback=()=>{
         this.props.history.push('/home');
     }
     check=()=>{
        let user = this.refs.user.value.trim();
        let psw = this.refs.psw.value.trim();
        if(user && psw){
         //非空，登陆框取消禁选
        
         this.refs.btn.dsiabled = false;
         this.refs.btn.style.background='#ff5e69'
        }else{
         //空，登陆框禁选
         
         this.refs.btn.dsiabled = true;
         this.refs.btn.style.background='#ccc';
        }
    }
        //点击登录按钮
      login = async()=>{
       //获取输入框的值
        let username = this.refs.user.value.trim();
        let password = this.refs.psw.value.trim();

         if(username && password){
             //发送数据请求进行数据校验
             let {data} = await Api.login({username,password});
             console.log(data,'login');
            if(data.code ===1){
               
                let {username,authorization} = data.data;
                 //console.log(username,authorization);
                //登陆成功返回上一页
                this.props.history.go(-1);
                //用户名存在redux
                this.props.login(username,authorization)
                //保存token到本地
                localStorage.setItem('authorization',authorization);
                localStorage.setItem('username',username);
            }else{
                alert('用户名或密码错误');
            }
         }
     }
        //点击注册按钮
        reg=()=>{
          this.props.history.push('/reg');
        }   

      render(){
          return(
              <div className="login">
                  <h3><Icon className="icon" onClick={this.goback.bind(this)} type="left" />登陆8只小猪</h3>
                  <p><label htmlFor="user">账号</label><input id="user" ref='user' onChange={this.check} placeholder="请输入手机号"/></p>
                  <p><label htmlFor="password">密码</label><input id="password" ref='psw' type="password" onChange={this.check} placeholder="请输入密码"/></p>
                  <div><input ref="btn" onClick={this.login} className="btn" type="submit" defaultValue="登陆"/></div>
                  <div><input ref="btn2" onClick={this.reg} className="btn2" type="button" defaultValue="注册"/></div>
                  <li>登陆代表您同意<i>《用户协议》</i></li>
              </div>
          )
      }
}

let mapStateToProps= function(state){
   // console.log(state.common.token,'state.token');
    return{

    }
}
let mapDispatchToProps = function(dispatch){
    return{
       login(userInfo,token){
         dispatch({type:'login',userInfo,token})
       } 
    }
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login);
export default Login