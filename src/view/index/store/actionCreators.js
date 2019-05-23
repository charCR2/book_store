
import axios from 'axios'

export const getJsonList = () => (dispatch) => {
    axios.get('http://localhost/list').then((res)=>{
        const data = res.data.data;
        // dispatch(initListAction(data))
    })
};