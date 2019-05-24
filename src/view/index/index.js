import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {
    Header,
    Wrapper} from "./style";

class index extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <Header>{this.props.index.plah}</Header>
                <Wrapper />
            </Fragment>
        )
    }
}
const mapStateToPrpos = (state) => ({

});
const mapDispatchToPrpos = (state) => ({

});

export default connect(mapStateToPrpos,mapDispatchToPrpos)(index)