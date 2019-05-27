import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import { Carousel } from 'antd-mobile';
import  ScrollNav  from '../../component/scrollNav/scrollNav'
import  ListItem  from '../../component/listItem/listItem'
import {
    SearchInputBox,
    SearchInput,
    IndexContainer,
    IconBox,
    FourFold,
    FourFoldItem,
    ImgRotate,
    BestSeller,
    } from "./style";
import util from '../../api/util'
import {getRankCategory} from '../../api/api'
class index extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            datas: [
                {name:'科普科技'},  {name:'综合'},  {name:'文学小说'},{name:'经管励志'},{name:'儿童馆'},{name:'即将到来'}],
            imgHeight: 176,
            bestSellerTtemIndex:0,
            book_list:[]
        }
    }

    render(){
        return(
            <Fragment>
                <SearchInputBox className="flex-cen-xy">
                    <SearchInput className="flex-cen-xy">搜索</SearchInput>
                </SearchInputBox>
                <IndexContainer>
                    <Carousel
                        style={{borderRadius:'5px',boxShadow:' 0px 25px 10px -20px #ddd',overflow:'hidden',height:"2rem"}}
                        autoplay={true}
                        dots={false}
                        infinite>
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%'}}>
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', height:"2rem",verticalAlign: 'top' }}
                                />
                            </a>
                        ))}
                    </Carousel>

                    <div className='flex-spc-x flex-wrap' style={{marginTop:'0.3rem'}}>
                            {this.props.iconBox.map(val=>{
                               const url=require(`../../../static/${val.name}.png`);
                               return (
                                   <IconBox className='flex-xy' key={val.name}>
                                       <img src={url}/>
                                       <p>{val.title}</p>
                                   </IconBox>)
                            })}
                    </div>

                    <FourFold className='flex-wrap flex-cen-xy'>
                        {this.props.fourFold.map(val=>{
                            const url=require(`../../../static/fourFold/${val.imgName}.png`);
                            return (
                                <FourFoldItem className={`flexc-cen-x ${val.className}`} key={val.imgName}>
                                    <div className='infoBox'>
                                        <p>{val.title}</p>
                                        <p>{val.tip}</p>
                                    </div>
                                    <ImgRotate>
                                        <img src={url}/>
                                    </ImgRotate>
                                </FourFoldItem>)
                        })}
                    </FourFold>
                </IndexContainer>

                <BestSeller>
                    <div className='flex-spc-x title'>
                        <p>畅销榜</p>
                        <p>更多></p>
                    </div>
                    <ScrollNav
                    index={this.state.bestSellerTtemIndex}
                    scrollList={this.state.datas}
                    scrollCallBack={this.setScrollNavIndex.bind(this)}
                    >
                    </ScrollNav>

                    <div className="listRow">
                        {this.state.book_list.map(item=>{

                            return(
                            <ListItem key={item.name} url={util.staticPath+item.cover}>
                            </ListItem>
                            )}
                        )}
                    </div>
                </BestSeller>
            </Fragment>
        )
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        getRankCategory().then(res=>{
            console.log(res);
            let maleid = res.data.male[this.randomnum(res.data.male)]._id;
            this.setState({
                book_list:res.data.female
            })
        })

    }
    randomnum(arr){
        return parseInt((Math.random()*(arr.length - 1)));
    }

    getbooklist(id){

        getRank(id).then(res=>{
            let books=res.data.ranking.books.slice(0,10);
            books.forEach((book)=>{
                book.cover=util.staticPath+book.cover;

            })
        })
    }
    setScrollNavIndex(obj,index){
        console.log('father',index,obj);
    }
}
const mapState = (state) => ({
    plah : state.index.plah,
    iconBox : state.index.iconBox,
    fourFold : state.index.fourFold
});
const mapDispatch = (state) => ({

});

export default connect(mapState,mapDispatch)(index)