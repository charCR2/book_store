import React ,{Component} from 'react'
import './index.css'
class scrollNav extends Component{
    constructor(props){
        super(props);
        this.state={
            navIndex:0
        }
    }

    render(){
        return(
            <div className="scrollBox">
                <div className='scroll'>
                    {this.props.scrollList.map((item,i)=>(
                        <div
                        key={item.name}
                        onClick={()=>{
                            this.setState({
                                navIndex : i
                            });
                            if(!!this.props.scrollCallBack){
                                this.props.scrollCallBack(item,i)
                            }
                        }}
                        className={i===this.state.navIndex?`scrollItem scrollCheck`:`scrollItem scrollNoCheck`}>
                            {item.name}<div>
                        </div></div>
                    ))}

                </div>
            </div>
        )
    }
}

export default scrollNav