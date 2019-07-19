import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:  Math.ceil(data.length / 10)
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

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePageList = (page) => ({
    type: constants.CHANGE_PAGE_LIST,
    page
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

