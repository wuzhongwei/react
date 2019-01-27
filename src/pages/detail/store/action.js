import axios from 'axios';
import {CHANGE_DETAIL} from './constants';
// import {fromJS} from 'immutable';

const changeDetail = (title,content) => ({
	type: CHANGE_DETAIL,
	title,
	content
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detailList.json?id=' + id).then((res) => {
			const reuslt = res.data.data;
			dispatch(changeDetail(reuslt.title,reuslt.content))
		})
	}
}