import React, { Component } from 'react';
import axios from 'axios'
import './Story.css'
class Story extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1906/story').then((res) => {
            this.setState({
                data: res.data.data,
            });
            
        })

    }
    stories() {
        return this.state.data.map((item) => {
            return (
                <div className="all-story" key={item.title}>
                    <div className="someone" >
                        <img src={item.img} alt="" />
                        <div className="tip">
                            <p className="name">{item.name}</p>
                            <p className="address">{item.address}</p>
                        </div>
                        <p className="title">{item.title}</p>
                    </div>
                </div>
            )

        })
    }

    render() {
        return (
            <div className="story-talk">
                {this.stories()}
            </div>
        );
    }
}

export default Story;