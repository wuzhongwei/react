import { HEADER_BLUR, HEADER_FUCOS, HEADER_CHANNGE, HEADER_MOUSEENTER, HEADER_MOUSELEAVE, HEADER_CHANGEPAGE } from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const changeList = (data) => ({
    type: HEADER_CHANNGE,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})


export const focus = () => ({
     type: HEADER_FUCOS
})

export const blur = () => ({
    type: HEADER_BLUR
})

export const mouseEnter = () => ({
    type: HEADER_MOUSEENTER
})
export const mouseLeave = () => ({
    type: HEADER_MOUSELEAVE
})

export const changePage = (page) => ({
    type: HEADER_CHANGEPAGE,
    page
})





export const getList = () =>{
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() =>{
            console.log('error')
        })
    }
}