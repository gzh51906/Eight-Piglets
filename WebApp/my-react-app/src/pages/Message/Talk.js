import React, { Component } from 'react';
import { Icon } from 'antd';
import './Talk.css'
class talk extends Component {
    constructor() {
        super()
        this.state = {
            text1: [
                { icon1: 'user', title: '咨询达人', content: '20秒填写定制单，快速安排达人', icon2: 'right' },
                { icon1: 'message', title: '在线沟通', content: '咨询专业客服，轻松预约达人', icon2: 'right' },
                { icon1: 'phone', title: '电话咨询', content: '专线客服，沟通更畅快', icon2: 'right' },
            ],
            text2: [
                { icon1: 'download', title: '下载App', content: '体验完整功能，直接与当地达人对话', icon2: 'right' },
                { icon1: 'wechat', title: '关注微信号', content: '复制“8只小猪”，到微信公众号粘贴', icon2: 'right' },
                { icon1: 'user-add', title: '成为达人', content: '我有精彩玩法，我要成为8只小猪达人', icon2: 'right' },
            ]
        }
    }

    render() {
        return (
            <div className="say">
                <div className="logo-T">
                    <img src='../../assets/logo-consult.png' alt="" />
                    <p>不做攻略，玩遍全世界</p>
                </div>
                <div className="content-one">
                    <ul>
                        {
                            this.state.text1.map(item => {
                                return (
                                    <li key={item.title}>
                                        <span><Icon type={item.icon1} /></span>
                                        <div className="talk-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                            <span className="right"><Icon type={item.icon2} /></span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="content-two">
                    <ul>
                        {
                            this.state.text2.map(item => {
                                return (
                                    <li key={item.title}>
                                        <span className="tank"><Icon type={item.icon1} /></span>
                                        <div className="talk-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                            <span className="right"><Icon type={item.icon2} /></span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default talk;