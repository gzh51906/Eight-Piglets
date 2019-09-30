import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Destination from './Destination.js'
import Talk from './Talk.js'
import './Message.css'
import { Menu } from 'antd';
class Message extends Component {
    constructor() {
        super()
        this.state = {
            continent: [],
            current: "/message/destination",
            menu: [
                { path: "/home", title: "首页", name: "Home" },
                { path: "/destination", title: "目的地", name: "Destination" },
                { path: "/talk", title: "咨询", name: "Talk" },
                // { path: "/message", title: "消息", name: "Message", icon: "message" },

            ]
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
            current: this.props.location.pathname
        })
        }, 1);
        
    }
    handleClick = ({ key }) => {
        if (key == "/message/home") {
            this.props.history.push("/home");
            return
        }
        this.setState({
            current: key,
        });
        this.props.history.push(key)
    }
    render() {
        let { path } = this.props.match;       
        return (
            <div className="msg">
                <div className="msg-top">
                    <p> <img src='../../assets/logo.jpg' alt="" /></p>
                    <div className="plug-in">
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            {this.state.menu.map(item => {
                                return (
                                    <Menu.Item key={path+item.path}>
                                        <p>{item.title}</p>
                                    </Menu.Item>)
                            })}
                        </Menu>
                    </div>
                </div>
                <Switch>

                    <Route path={path + "/destination"} component={Destination} />
                    <Route path={path + "/talk"} component={Talk} />
                    <Redirect path={path} to={path + "/destination"} />
                </Switch>
            </div>
        );
    }
}

export default Message;