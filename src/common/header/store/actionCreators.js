import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const searchList = () => ({
    type: constants.SEARCH_BLUR
})

export const getSearchList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const action = changList(res.data.data)
            dispatch(action)
        }).catch(() => {
            console.log('请求失败了')
        })
    }
}