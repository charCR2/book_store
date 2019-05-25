import React ,{Component} from 'react'
import './bestSeller.css'
class bestSeller extends Component{
render(){
    return(
        <div className="scrollBox">
            <div className='scroll'>
                {this.props.scrollList.map((item,i)=>(
                    <div 
                    key={item.name}
                    onClick={()=>{
                        console.log(i)
                        if(!!this.props.scrollCallBack){
                            this.props.scrollCallBack(item,i)
                        }
                    
                    }} 
                    className={i===this.props.index?`scrollItem scrollCheck`:`scrollItem scrollNoCheck`}>{item.name}<div></div></div>
                ))}
                
            </div>
        </div>
    )
}

}

export default bestSeller