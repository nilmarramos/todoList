import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReduser = combineReducers({
	todo: todoReducer
})

export default rootReduser