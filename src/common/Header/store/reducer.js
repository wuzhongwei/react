import { HEADER_BLUR, HEADER_FUCOS, HEADER_CHANNGE,HEADER_MOUSEENTER,HEADER_MOUSELEAVE, HEADER_CHANGEPAGE } from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 0,
	totalPage: 1
}); 

export default (state = defaultState,action) => {
	switch (action.type) {
		case HEADER_FUCOS:
			return state.set('focused', true)
		case HEADER_BLUR:
			return state.set('focused', false)
		case HEADER_CHANNGE:
			return state.merge({
				'list':action.data,
				'totalPage': action.totalPage
			})
		case HEADER_MOUSEENTER:
			return state.set('mouseIn', true)
		case HEADER_MOUSELEAVE:
			return state.set('mouseIn', false)
		case HEADER_CHANGEPAGE:
			return state.set('page', action.page)
		default:
		return state;
	}
    
}