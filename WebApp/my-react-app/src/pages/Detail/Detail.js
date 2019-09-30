import React, { Component } from 'react';
import { Carousel, Icon, Rate } from 'antd';
import './Detail.css'
import axios from 'axios';
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: [
                { id: 1, image: '../../assets/detail1.jpg' },
                { id: 2, image: '../../assets/detail2.jpg' },
                { id: 3, image: '../../assets/detail3.jpg' },
                { id: 4, image: '../../assets/detail4.jpg' }
            ],
            data: []
        }


    }
    componentDidMount() {
        axios.get('http://localhost:1906/destin/data').then((res) => {
            res.data.data.forEach(element => {
               // console.log('element', element.tip);
                element.tipContent.map(item => {
                    if (item.title == this.props.match.params.id) {
                      //  console.log('=======', item);
                    //     return (
                    //         <div className="bill">
                    //             <h1>{item.title}</h1>
                    //             <Icon type="flag" />
                    //             <span>多日行</span>
                    //             <Icon type="environment" />
                    //             <span>{item.comment}</span>
                    //             <p className="play">
                    //                 <Icon type="star" />
                    //                 <span>自然风光 休闲玩乐</span>
                    //             </p>
                    //             <p className="username">远方</p>
                    //             <Rate disabled defaultValue={5} />
                    //             <div className="into">
                    //                 <span>旅游专业咨询顾问 &nbsp;|</span>
                    //                 <span>我能提供2种玩法</span>
                    //                 <p>回复率95%</p>
                    //             </div>
                    //         </div>
                    //     )
                    }
                    console.log();
                    

                })

            });
            // this.setState({
            //     data: 
            // })
           // console.log('55555555555555', res.data.data);
        })


    }
    render() {
        return (
            <div className="container">
                <div className="detail">
                    <Carousel autoplay>
                        {
                            this.state.banner.map(item => {
                                return (
                                    <div className="detail-banner" key={item.id} >
                                        <img src={item.image} alt="图像" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <div className="bill">
                        <h1>{this.props.match.params.id}</h1>
                        <Icon type="flag" />
                        <span>多日行</span>
                        <Icon type="environment" />
                        <span>瑞士</span>

                        <p className="play">
                            <Icon type="star" />
                            <span>自然风光 休闲玩乐</span>
                        </p>
                        <p className="username">远方</p>
                        <Rate disabled defaultValue={5} />
                        <div className="into">
                            <span>旅游专业咨询顾问 &nbsp;|</span>
                            <span>我能提供2种玩法</span>
                            <p>回复率95%</p>
                        </div>
                    </div>



                </div>
                <div className="fix">
                    <span className="fix-left">在线咨询</span>
                    <span className="fix-right">咨询达人</span>
                </div>
            </div>
        );
    }
}

export default Detail;