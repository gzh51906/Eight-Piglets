import React, { Component } from 'react';
import axios from 'axios'
import './Message.css'
import { Input, Icon } from 'antd';
const { Search } = Input;
class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            continent: [],
        }
    }
    btn(item){
        this.props.history.push(`/list/${item.nameCn}`);
    }
    componentDidMount() {
        axios.get('http://localhost:1906/continent').then((res) => {          
            this.setState({
                continent: res.data.data,
            })
        })
    }

    cortin() {
        return this.state.continent.map(item => {
            return (
                <div className="cont-title" key={item.name}>
                    <div className="cont-top">
                        <Icon type="appstore" />
                        <span>{item.name}</span>
                    </div>
                    <div className="cont-content">
                        <div className="country">
                            <ul>
                                {
                                    item.country.map(item => {
                                        return (
                                            <li key={item.nameCn} onClick={this.btn.bind(this,item)}>
                                                <span className="nameCn">{item.nameCn}</span>
                                                <i><Icon type="right" /></i>
                                                <span className="nameEn">{item.nameEn}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="search">
                    <Search
                        placeholder="想去哪里？"
                        onSearch={value => console.log(value)}
                        style={{ width: 350 }}
                    />
                    <br />
                </div>
                <div className="cont">
                    {this.cortin()}
                </div>
                <div className="talk">
                    <Icon type="phone" />
                    <p className="cons">咨询</p>
                </div>
            </div>
        );
    }
}

export default Destination;