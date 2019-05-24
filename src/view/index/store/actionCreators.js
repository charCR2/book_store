import { CLICK_BTN_DEL}from './actionTypes'
import axios from 'axios'

export const getButDel = (index) =>{
    return{
        type:CLICK_BTN_DEL,
        index:index
    }
};

export const getJsonList = () => (dispatch) => {
    axios.get('http://localhost/list').then((res)=>{
        const data = res.data.data;
        // dispatch(initListAction(data))
    })
};