import React, { Component } from 'react';
import './List.css'
import axios from 'axios'
import { Route, Switch,Link } from 'react-router-dom'
import { Input, Tabs, Icon } from 'antd';
// import Detail from '../Detail/Detail';
const { Search } = Input;
const { TabPane } = Tabs;
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }

    }
    componentDidMount() {
        axios.get('http://localhost:1906/destin/data').then((res) => {
            console.log(res);
            
            this.setState({
                data: res.data.data
            })
        })

    }
    goto(id) {
        this.props.history.push(`/detail/${id}`)
        console.log(id);
    }
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div className="List">
                <div className="list-banner" style={{ background: 'url("../../assets/List-banner.jpg") no-repeat' }}>
                    <Search
                        disabled
                        placeholder="搜索 目的地 / 活动 / 关键词"
                        onSearch={value => console.log(value)}
                        style={{ width: 280 }}
                    />
                    <h1>带你玩遍{this.props.location.pathname.split('/')[2]}</h1>
                </div>
                <div className="serves">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <TabPane tab={<p className="titleServe"> <i><Icon type={item.icon} /></i><span className="titleTip">{item.tip}</span></p>} key={index + 1}>
                                        {
                                            item.tipContent.map(item => {
                                                return (
                                                    <div className="part" key={item.index} onClick={this.goto.bind(this,item.title)} >
                                       
                                                        {/* <Link to={`/detail/${item}`}> */}
                                                            <img src={item.img} />
                                                            <span>{item.price}</span>
                                                            <h4>{item.title}</h4>
                                                            <p>{item.comment}</p>
                                                        {/* </Link> */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </div>
                <Switch>
                    {/* <Route path='/detail/:' component={Detail} /> */}
                </Switch>
            </div>
        );
    }
}

export default List;