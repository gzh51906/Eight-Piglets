import React,{Component} from 'react'
import {Icon} from 'antd'
import "../style/reg.scss"
//引入数据请求接口
import Api from '@/api';
class Reg extends Component{
    state={
        isok1:false,
        isok2:false
    }
    componentDidMount(){
        //初始化禁点提交按钮
        this.refs.btn.disabled = true;
    }
    check=()=>{
      //校验输入的手机号和密码
      //手机号
      let isok1 = false;
      let isok2 = false;
      let phone = this.refs.phone.value.trim();
      let psw = this.refs.pwd.value.trim();
      //校验规则    
      let text1 = /^1[3-9][0-9]{9}$/;
      let text2 = /^[a-zA-Z0-9]{6,16}$/
      let text3 = /[0-9]+/;
      let text4 = /[a-zA-Z]+/;
      if(phone){
         //console.log(phone,'phone');
          let res1 = text1.test(phone);
          if(res1){ isok1 = true;}
          else {isok1 = false ;}
      }else{
        isok1 = false;
      }
      if(psw){   
        let res2 = text2.test(psw);
        let res3 = text3.test(psw);
        let res4 = text4.test(psw);
       // console.log(psw,'psw',res2,res3,res4);
        if(res2 && res3 && res4){isok2 = true;}
        else{isok2 = false ;}
      }else{
        isok2 = false;
      }
       //注册框状态
       if(isok1 && isok2){
           //改变注册框的样式
           this.refs.btn.style.background="#ff5e69";
           this.refs.btn.disabled = false
       }else{
           this.refs.btn.style.background="#ccc";
            this.refs.btn.disabled = true;         
       }
    }
     sub= async()=>{
      
        //获取两个输入框的值并存入数据库
        let username = this.refs.phone.value.trim();
        let password = this.refs.pwd.value.trim();
        //项数据库查询用户是否已存在
         let {data:{data}} = await Api.finduser(username);
         //data长度不为0
         if(data[0]){
             alert('手机号已注册');
         }
         else{
             //将用户信息存入数据库
            console.log(username,'username');
            Api.adduser({username,password});
            //注册成功后跳转到登陆页
            this.props.history.push('/login');
         }
    }
    //返回首页
    goback=()=>{
        this.props.history.go(-1);
    }

     render(){ 
         return(
             <div className="reg">
                  <h3><Icon className="icon" type="left" onClick={this.goback}/>注册账号</h3>
                   <p><label htmlFor="user">用户名</label><input ref="phone" onChange={this.check} id="user" type="text" placeholder="请输入手机号" /></p>
                   <p><label htmlFor="password">密码</label><input ref="pwd" onChange={this.check} id="password" type="password"  placeholder="请设置6-16位登陆密码"/></p>
                   <h4>密码长度6~16位,由英文字母a~z(区分大小写)、数字0~9、至少两种特殊字符组成</h4>
                   <div><input ref="btn" onClick={this.sub} className="btn" type="submit" defaultValue="完成" /></div>
                   <li>继续操作代表您同意<i>《用户协议》</i></li>
            </div>
         )
     }
}

export default Reg