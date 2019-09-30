import React, { Component } from 'react';
import { Icon } from 'antd';
import './Discover.css'

class Discover extends Component {
    state = {
        tourist: [
            { id: "1", img: '../../assets/story1.jpg', title: '感恩节，我让7个有课说出了旅行中的痛和爱' },
            { id: "2", img: '../../assets/story2.jpg', title: '你什么时候意识到妈妈老了？' },
            { id: "3", img: '../../assets/story3.jpg', title: '听说去柬埔寨坐牛车将是下一个被刷爆的奢华体验？' },
            { id: "4", img: '../../assets/story4.jpg', title: '她在日本的这八大体验，第一个就秒杀你！' },
            { id: "5", img: '../../assets/story5.jpg', title: '逃离北上广之后，我有了说不完的故事' },
            { id: '6', img: '../../assets/story6.jpg', title: '中古世界的城市里，我想就走到这。' },
        ],
        expert: [
            { id: "1", img: '../../assets/story7.jpg', title: '阿拉斯加 | 这个看过100次极光的男人，想成为你和阿拉斯加的情人' },
            { id: "2", img: '../../assets/story8.jpg', title: '美西 | 放弃铁饭碗，20年前他已真实演绎了“世界那么大，我想去看看”' },
            { id: "3", img: '../../assets/story9.jpg', title: '摩洛哥 | 台湾妹子为何远嫁撒哈拉沙漠，称为摩洛哥人的妻子？' },
            { id: "4", img: '../../assets/story10.jpg', title: '牛津 | 前方高能！抓过毒贩的牛津华人学霸出没' },
            { id: "5", img: '../../assets/story11.jpg', title: '北京 | 去北京不是为了感受中华上下五千年，难道是要去吸霾？' },
            { id: '6', img: '../../assets/story12.jpg', title: '东京 | 武警部队3年后，我是如何一步步从仇日分子变成生活在日本的当地人？' },
        ],
        novelty: [
            { id: "2", img: '../../assets/story13.jpg', title: '“你一天到晚只是打渔，一定没有烦恼吧？”' },
            { id: "1", img: '../../assets/story14.jpg', title: '100块怎么才能吃到特级厨师给名流政要做的菜？还能趁机偷学？' },
            { id: "3", img: '../../assets/story15.jpg', title: '大家挤破头都想上的这艘船，就连王菲都说好？！' },
            { id: "4", img: '../../assets/story16.jpg', title: '没去过这个岛算去过香港吗？星爷的《喜剧之王》拍摄地竟鲜为人知' },
            { id: "5", img: '../../assets/story17.jpg', title: '热到变形？一起逃去新西兰避暑，私人海岛+不限量龙虾，仅限4人' },
            { id: '6', img: '../../assets/story18.jpg', title: '为何他们收入不到1500，却是幸福指数最高的国家？' },
            { id: '6', img: '../../assets/story19.jpg', title: '如果这都不算爱，我和榴莲独处了48小时' },
            { id: '6', img: '../../assets/story20.jpg', title: '这种卖艺不卖身的服务，有钱也买不到？！' },
        ]
    }
    visitor() {
        this.props.history.push('./story');
    }
    niceGuy() {
        this.props.history.push('./celebrity');
    }
    somethingNew() {
        this.props.history.push('./freshNew');
        
    }
    render() {
        let { tourist, novelty, expert } = this.state

        return (
            <div className="discover">
                <div className="tit">
                    <p>旅行精彩</p>
                </div>
                {/* 游客故事 */}
                <div className="content">
                    <div className="story">
                        <h2>游客故事</h2>
                        <span onClick={this.visitor.bind(this)}>更多<Icon type="right" /></span>
                    </div>
                    <div className="travel-story">
                        {
                            tourist.map(item => {
                                return (
                                    <div key={item.id} className="travel">
                                        <img src={item.img} alt='' />,
                                    <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* 达人故事 */}
                    <div className="story">
                        <h2>达人故事</h2>
                        <span onClick={this.niceGuy.bind(this)}>更多<Icon type="right" /></span>
                    </div>

                    <div className="travel-story">
                        {
                            expert.map(item => {
                                return (
                                    <div key={item.img} className="travel">
                                        <img src={item.img} alt='' />,
                                    <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* 新鲜事 */}
                    <div className="story">
                        <h2>新鲜事</h2>
                        <span onClick={this.somethingNew.bind(this)}>更多<Icon type="right" /></span>
                    </div>
                    <div className="travel-story">
                        {
                            novelty.map(item => {
                                return (
                                    <div key={item.title} className="travel thing">
                                        {/* <div className="thing"> */}
                                        <img src={item.img} alt='' />
                                        <p>{item.title}</p>
                                        {/* </div>, */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <Switch>
                    <Route path="/story" component={Story} />
                    <Route path="/celebrity" component={Celebrity} />
                    <Route path="/freshNew" component={FreshNew} />
                </Switch> */}
            </div>

        );
    }
}

export default Discover;