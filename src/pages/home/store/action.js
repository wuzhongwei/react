import axios from 'axios';
import {CHANGE_HOME_DATA, ADD_HOME_DATA, CHANGE_SCROLL} from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (resut) => ({
	type:CHANGE_HOME_DATA,
	topicList: resut.topicList,
	list: resut.list,
	recompList: resut.recompList
});

const addHomeList = (list,nextPage) => ({
	type:ADD_HOME_DATA,
	list: fromJS(list),
	nextPage
});

export const toggleTop = (show) => ({
	type: CHANGE_SCROLL,
	showScroll: show,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const resut = res.data.data;
            dispatch(changeHomeData(resut));
        })
    }
}

export const getMoreList = (page) => {
	return (dispatch) => {
			axios.get('/api/homeList.json?page='+ page).then((res) => {
					const resut = res.data.data;
					dispatch(addHomeList(resut, page+1));
			})
	}
}