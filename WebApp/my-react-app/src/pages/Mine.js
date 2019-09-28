import React,{Component} from 'react';
import { Avatar,Row, Col } from 'antd';
//引入外部样式
import '../style/mine.scss'
import {connect} from 'react-redux';
import { Input,Icon,Carousel,Menu} from 'antd';
class Mine extends Component{
    state={
        username: this.props.username
    }
    login=()=>{
        this.props.history.push('/login');
    }
    render(){
        return(
            <div className="mine">
               <div className='header'>
                 <Avatar  className="usehead" size={70} icon="user" />
                 <span className="login" onClick={this.login}>{this.state.username?this.state.username:"点击登录"}</span>
               </div>
               <div className="content">
                    <Row className="tag">
                        <Col className="tagtex" span={8}>
                         <span><Icon type="heart" /></span>
                            我的收藏
                            <i></i>
                        </Col>
                        <Col  className="tagtex" span={8}>
                        <span><Icon type="file-text" /> </span> 
                            我的订单
                            <i></i>
                        </Col>
                        <Col  className="tagtex"  span={8}>
                        <span> <Icon type="snippets" /></span>
                            我的保单
                            <i></i>
                        </Col>
                    </Row>
                     <div className="text">
                         <p>我的优惠券 <i>></i></p>
                         <p>邀请好友，立享优惠 <i>></i></p>
                         <p>联系客服 <i>></i></p>
                     </div>
                     <div  className="text">
                         <p>下载8只小猪App <i>></i></p>
                         <p>成为达人，赚取百万佣金 <i>></i></p>
                         <p>关于我们<i>></i></p>
                     </div>
               </div>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    console.log(state.common.userInfo,'mine');
   return{
       username:state.common.userInfo
   }
}
Mine = connect(mapStateToProps)(Mine);
export default Mine;