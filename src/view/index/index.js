import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {
    header,
    Wrapper} from "./style";

class index extends Component{
    render(){
        return(
            <Fragment>
                <header></header>
                <Wrapper />
            </Fragment>
        )
    }
}
const mapStateToPrpos = (state) => ({

});
const mapDispatchToPrpos = (state) => ({

});

export default connect(mapStateToPrpos,mapDispatchToPrpos())(index)