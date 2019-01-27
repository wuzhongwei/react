
import {fromJS} from 'immutable';
import {CHANGE_HOME_DATA, ADD_HOME_DATA, CHANGE_SCROLL} from './constants';
const defaultState =fromJS({
	topicList: [],
	list: [],
	recompList: [],
	page: 1,
	showScroll: false,
}); 

export default (state = defaultState,action) => {
	switch (action.type) {
				case CHANGE_HOME_DATA:
				return state.merge({
					topicList: fromJS(action.topicList),
					list: fromJS(action.list),
					recompList: fromJS(action.recompList),
				})
				case ADD_HOME_DATA:
				return state.merge({
					list: state.get('list').concat(action.list),
					page: action.nextPage
				});
				case CHANGE_SCROLL:
				return state.set('showScroll', action.showScroll)
        default:
            return state;
	}
    
}