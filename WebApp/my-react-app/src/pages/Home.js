import React,{Component} from 'react'
import { Row, Col,Input,Icon,Carousel,Menu} from 'antd';
//引入外部样式
import '@/style/home.scss';
//引入数据请求接口
import Api from '@/api';
//引入高阶组件
import {connect} from 'react-redux';
const { Search } = Input;

class Home extends Component{
    state ={
      username:this.props.username,
        tag:[
            {imgurl:'../img/home/logo_cat_guide.png',
             text:'特色达人'},
            {imgurl:'../img/home/logo_cat_plan.png',
             text:'机场包机'},
            {imgurl:'../img/home/logo_cat_car.png',
              text:'畅游包车'},
            {imgurl:'../img/home/logo_cat_dest1.png',
             text:'目的地'},
            {imgurl:'../img/home/logo_cat_dest.png',
              text:'行程定制'},
        ],
        daRen:[
            {
                text:'斜杆青年',
                name:'Dracul',
                title:'全职制霸摄影小哥带您上天下海尝尽山珍海味',
                imgurl:'../img/home/A604268718F76D17810D28E900B98863.jpg'
            },{
                text:'一级体育运动员',
                name:'美国资深旅游达人专家',
                title:'快本夏威夷节目录制特邀行程定制师',
                imgurl:'../img/home/443252BBFBDA43BEDE4696CE2965F814.jpg'
            },{
                
                text:'明星御用达人',
                name:'孙麒',
                title:'跟摄影达人探索小众珍藏路线 体验别样欧洲',
                imgurl:'../img/home/9410c481b8527595a1926dc80d597f352.jpg'
            },{
                text:'多国语言能力者',
                name:'贝勒®',
                title:'应用外语硕士带动你的灵魂，去寻找生命的春光',
                imgurl:'../img/home/95ec46ee301b411eb6b66be0993dd08f.jpg'
            },{
                text:'户外达人',
                name:'Leo~环游澳洲',
                title:'澳洲旅行专家，带您在南半球这个大岛撒点野',
                imgurl:'../img/home/cefabe92aa4308cf9516c3bd3705866b2.png'
            },
            {
                text:'明星御用达人',
                name:'cap nick',
                title:'央视《华人世界》节目评选“金牌导游',
                imgurl:'../img/home/099C6CEB792CE4F7B3ACD2E0FBB2D0B2.jpg'
            }
        ],
        //局部导航
        current:'125',
        tagcon:[],
        mintag:[
                {
                  text:'跟屁虫 ',
                  key:"125"
                },{
                  text:'美琪 ',
                  key:"93"
                },{
                  text:'Marc ',
                  key:"10"
                },{
                  text:'毛驴哥 ',
                  key:"5"
                },{
                  text:'小麦 ',
                  key:"23"
                }
              ]
    }
    //在挂载阶段初始化tag选项卡
     async componentDidMount(){
          this.setState({
            tagcon: await Api.gettag(this.state.current)
          })
            // 判断是否已登录
        let authorization = localStorage.getItem('authorization');
        if(authorization){
             // 发起校验
            let token = await Api.checkToken();                
            if(token){
                //将用户名存到 redux
                let username =  localStorage.getItem('username');
                this.setState({username:username});
                this.props.login(username,authorization);
            }
        }         
     }

    handleClick = async (e)=> {
      this.setState({
        current: e.key,
        tagcon: await Api.gettag(e.key)
      });
    };
   //跳转
   log=()=>{
     this.props.history.push('/login');
   }
   reg=()=>{
    this.props.history.push('/reg');
   }
   logout=()=>{
     this.props.logout();
     //清除本地存储
     localStorage.setItem('username','');
     localStorage.setItem('authorization','');
     //清空username
     this.setState({
       username:''
     })
     alert('退出成功');
   }
   //达人
   guide=()=>{
     this.props.history.push('/guide');
   }
   //详情
   detail=(id)=>{
     this.props.history.push(`/detail/${id}`);
   }
    render(){
        return ( 
           <div className="home" >
             <Row className="header">
                <Col span={7}>
                    <img style={{width:'85%',height:'60%'}} src="https://pic.8pig.com/img/h5/new/common/logo_3x.png@.webp" />
                </Col>
                <Col span={12}>
                <Input
                    placeholder="想去哪里"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Col>
                <Col span={5} style={{color:'#ff5e69',fontSize:'14px',textAlign:'center'}}>
                      
                          {/* <span onClick={this.log}>登陆</span>/
                          <span onClick={this.reg}>注册</span>    */}
                       {/* 检验是否已登录  */}
                     {
                         this.state.username
                        ?
                        <span onClick={this.logout}><Icon type="logout" />  退出</span>    
                        :
                         <>
                          <span onClick={this.log}>登陆</span>/
                          <span onClick={this.reg}>注册</span>         
                         </>                   
                      } 


                </Col>
             </Row>
             {/* 轮播图 */}
             <Carousel autoplay>
                <div>
                  <img src="https://pic.8pig.com/operation/h5Home/181206154443500e85094d9a0182afd0.jpg"/>
                </div>
                <div>
                  <img src="https://pic.8pig.com/operation/h5Home/181206171205264285749922717e80e7.jpg"/>
                </div>
                <div>
                  <img src="https://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webhome/quanqiubang.jpg"/>
                </div>
             </Carousel>
             {/* tag */}
             <Row  type="flex" justify="space-around"  style={{textAlign:'center',padding:'10px'}}>
               {
                   this.state.tag.map((item)=>{
                     return  <Col span={4} key={item.text}>
                     <p><img style={{width:'60%'}} src={item.imgurl}/></p>
                     <span>{item.text}</span>
                   </Col>  
                   })
               }     
            </Row>
            {/* 优质达人 */}
            <h2 className="daRen">优质达人 
              <span className="people" onClick={this.guide}>更多></span>
            </h2>
             <ul className="daNav">
               {
                 this.state.daRen.map((item)=>{
                   return  <li key={item.name} onClick={this.guide}>
                      <img src={item.imgurl}/>
                      <span>{item.text}</span>
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </li>
                 })
               }
             </ul>
             {/*  */}
              <Row gutter={10} className="safe" type="flex" justify="space-around" style={{textAlign:'center',padding:'10px'}} >
                  < Col span={8}>
                    <img  src="../img/home/tag1.PNG"/>
                    <h3 onClick={this.props.getUser}>安全保障</h3>
                    <p>芝麻信用&公安征信系统双认证</p>
                  </Col>
                  <Col span={8}>
                    <img  src="../img/home/tag2.PNG"/>
                    <h3>专享服务</h3>
                    <p>私人订制，满足个性化需求</p>
                  </Col>
                  <Col span={8}>
                    <img  src="../img/home/tag3.PNG"/>
                    <h3>地道体验</h3>
                    <p>汇聚全球 50000+特色体验</p>
                  </Col>
              </Row>
              {/* play */}
              <h2 className="daRen">优质达人带你玩</h2>
              <div className='subnav'>
                 <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                  {
                    this.state.mintag.map((item)=>{
                       return (
                        <Menu.Item key={item.key} >
                           {item.text}     
                        </Menu.Item>
                       )
                    })
                  }
                
                </Menu>
                <div  className="tex">
                  <ul>
                    { 
                      this.state.tagcon.map((item)=>{
                         return(
                          <li key={item._id} onClick={this.detail.bind(this,item._id)}>
                          <img src={item.imgUrl} />
                          <span>{item.cityName} {item.countryName}</span>
                          <h3>{item.journeyName}</h3>
                          <p>
                             <b>{item.displayPrice}</b> 
                            <span>好评率</span>
                            <i>98.62%</i>
                          </p>
                         </li>
                         )
                      })
                    }
                  </ul> 
                 </div>            
           </div>
           {/* 推介专题 */}
           <h2 className="daRen">推介专题</h2>
            <ul className="comnav">
              <li>
                <img src="../img/home/commend1.png" />
              </li>
              <li>
                <img src="../img/home/commend2.jpg" />
              </li>
              <li>
                <img src="../img/home/commend3.jpg" />
              </li>
              <li>
                <img src="../img/home/qinzi.jpg" />
              </li>
              <li>
                <img src="../img/home/commend5.jpg" />
              </li>
            </ul>
            {/* 底部 */}
            <div className="footer">
             <Row  className="foottex" type="flex" justify="space-around" style={{textAlign:'center',padding:'10px'}}>
                <Col span={8}>预订流程</Col>
                <Col span={8}>旅行贴士</Col>
                <Col span={8}>关于我们</Col>
             </Row>
              <p>旅行社业务经营许可证：L-GDQ24B2</p>
              <p>Copyright&copy;2015-2018 8Pig.All Right Reserved</p>
            </div>
        </div>   
        )
    }
}
let mapStateToProps = function(state){
 // console.log(state.common.userInfo,'username home');
    return{
      username:state.common.userInfo
    }
}
let mapDispatchToProps = function(dispatch){
   
  return{
      getUser(){
        dispatch({type:'GET_USER'})
     },
     logout(){
      dispatch({type:'logout'});
     },
     login(userInfo,token){
      dispatch({type:'login',userInfo,token})
    } 
  }
}
Home = connect(mapStateToProps,mapDispatchToProps)(Home);
export default Home