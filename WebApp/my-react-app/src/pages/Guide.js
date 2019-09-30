import React,{Component} from 'react';
import {Menu,Icon,Row,Col,Spin} from 'antd'
import { Route, Redirect, Switch, NavLink ,withRouter} from 'react-router-dom';
//引入外部样式
import '@/style/guide.scss';
//引入数据请求接口
import Api from '@/api';
class Guide extends Component{
    state={
        guidelist:[]
    }
    //挂载阶段获取数据
    async componentDidMount(){
        let data = await Api.guide();
         this.setState({guidelist:data});
    }
    gotoDes=()=>{
        this.props.history.push('/message/destilation');
    }
    
    render(){   
        return(
            <div className="guide">
               <ul className="nav">
                   <span onClick={this.gotoDes}>目的地</span>
                   <span>导游</span>
                   <span>综合排序</span>
                   <span className="last">筛选</span>
               </ul>
               <ul className="guidelist">
                   { this.state.guidelist ? 
                    
                      this.state.guidelist.map((item)=>{
                         return(
                            <li className='item'  key={item._id}>
                            <Row gutter={10} className="row">
                               <Col span={9} >
                                   <img className="bigimg" src={item.avatar}/>
                               </Col>
                               <Col span={15} className="right">
                                   <h3>{item.cityName}<span>{item.countryName}</span></h3>
                                   <h4>
                                       <img src="../img/home/start.PNG"/>
                                       <span><i>{item.commentCount}</i>条评论</span>
                                       <span>{item.journeyCount}条玩法</span>
                                   </h4>
                                   <p>{item.selfIntroduction}</p>
        
                               </Col>
                            </Row>
                             <p>
                                {
                                    item.tagNames? item.tagNames.map(item=>{return <span key={item}>{item}</span>}):''
                                }
                            </p>
                         </li>
                         ) 
                     })
                     : <Spin /> 
                  }
                
               </ul>
            </div>
        )
    }
}

export default Guide;