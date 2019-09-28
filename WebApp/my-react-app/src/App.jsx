import React,{Component} from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Menu, Icon, Badge } from 'antd';
//引入外部样式 
import '@/style/common.scss';
import Home from '~/Home';
import Mine from '~/Mine';
import Discover from '~/Discover';
import Login from '~/Login';
import Reg from '~/Reg';
import More from '~/More';
import Detail from '~/Detail'
class App extends Component{
    state ={
        current: '/home',
        menu: [{
            path: '/home',
            text: '首页',
            icon: 'home',
            name: 'home'
        }, {
            path: '/discover',
            text: '发现',
            icon: 'eye',
            name: 'discover'
        }, {
            path: '/detail',
            text: '详情',
            icon: 'file-text',
            name: 'detail'
        }, {
            path: '/mine',
            text: '我的',
            icon: 'user',
            name: 'mine'
        }]
    }

    goto = (path) => {
        // 编程式导航：通过代码实现跳转
        // 如何获取history

        this.props.history.push(path)

    }
    //当前显示路由
    changeMenu = ({ key }) => {
        this.setState({
            current: key
        });
        this.goto(key)
    }
    render(){
        return(
            <div>
                 {/* 子页面 */}
                 <div>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/more" component={More} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/notfound" render={() => <div>404</div>} />
                        <Redirect from="/" to="/home" exact />
                        {/* 404 一定要写在最后面*/}
                        <Redirect from="*" to="/notfound" />
                    </Switch>
                </div>

                 {/* 底部导航 */}
                 <div>
                 <Menu
                    style={{position:"Fixed",bottom:0,width:'100%'}}
                    onClick={this.changeMenu}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    {
                        this.state.menu.map(item => {
                            return <Menu.Item key={item.path} style={{width:'25%',borderBottom:'none'}}>
                                {
                                    <>
                                        <Icon type={item.icon} style={{width:'100%',fontSize:'24px',margin:0}}/>
                                        <p style={{textAlign:'center',height:'24px'}}>{item.text}</p>
                                    </>
                                }
                                

                            </Menu.Item>
                        })
                    }
                  </Menu>
                  </div>
            </div>
        )
    }

}
App = withRouter(App);//返回一个新的组件 
export default App;