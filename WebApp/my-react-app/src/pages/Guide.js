import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import { Route, Redirect, Switch, NavLink ,withRouter} from 'react-router-dom';
//引入外部样式
import '@/style/guide.scss';
//引入数据请求接口
import Api from '@/api';
class Guide extends Component{
    state={}
    render(){   
        return(
            <div className="guide">
               <ul className="nav">
                   <span>目的地</span>
                   <span>当地向导</span>
                   <span>综合排序</span>
                   <span>筛选</span>
               </ul>
               
            </div>
        )
    }
}

export default Guide;