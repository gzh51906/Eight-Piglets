import React, { Component } from 'react';
import axios from 'axios'
import './FreshNew.css'
class FreshNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:1906/newstory').then((res) => {
            this.setState({
                data: res.data.data
            })
        })
    }
    fresh() {
        return this.state.data.map((item) => {
            return (
                <div className="content" key={item.title}>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="bor">
                {this.fresh()}
            </div>
        );
    }
}

export default FreshNew;