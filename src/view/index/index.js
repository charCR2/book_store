import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import { Carousel, WingBlank } from 'antd-mobile';

import {
    SearchInputBox,
    SearchInput,
    IndexContainer,
    IconBox,
    FourFold,
    FourFoldItem,
    ImgRotate,
    BestSeller,
    Scoller,
    } from "./style";

class index extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
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
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}>
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
                                   <IconBox className='flex-xy'>
                                       <img src={url}/>
                                       <p>{val.title}</p>
                                   </IconBox>)
                            })}
                    </div>

                    <FourFold className='flex-wrap flex-cen-xy'>
                        {this.props.fourFold.map(val=>{
                            const url=require(`../../../static/fourFold/${val.imgName}.png`);
                            return (
                                <FourFoldItem className={`flexc-cen-x ${val.className}`}>
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
                    <div className='scroll'>2222222222222222222222222222222222222222222222222222222222222222</div>
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
    }
}
const mapStateToPrpos = (state) => ({
    plah : state.index.plah,
    iconBox : state.index.iconBox,
    fourFold : state.index.fourFold
});
const mapDispatchToPrpos = (state) => ({

});

export default connect(mapStateToPrpos,mapDispatchToPrpos)(index)