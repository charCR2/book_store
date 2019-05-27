import React from 'react'
import './index.css'
import '../../plugin/flex.css'
const listItem = (props) =>{
    console.log(props)
    return(
        <div className='listItemBox flex-cen-xy'>
            <div className='imgBox'>
                <img src={props.url} />
            </div>
            <div className='tipsBox'>
                <p>长歌行</p>
                <p>夏达</p>
                <p><span>评分：</span>6.1</p>
            </div>

        </div>
    )
};

export default listItem