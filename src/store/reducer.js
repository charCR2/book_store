import { combineReducers} from "redux"
import  {reducer as indexReducer} from '../view/index/store'

export default combineReducers({
    index:indexReducer
})