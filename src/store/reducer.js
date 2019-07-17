import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store' // use as to rename

const reducer = combineReducers({
    header: headerReducer
})

export default reducer 