import React,{PureComponent, Fragment} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actions} from '../store';


class List extends PureComponent {
    render() {
			const {list, getMoreList, page } = this.props;
        return (
					<Fragment>
						{
							list.map((item, index) => {
								return (
									<Link  key={index} to={'/detail/' + item.get('id') }>
									<ListItem>
									<img alt="" src={item.get('imgUrl')} />
									<ListInfo>
										<h3>{item.get('title')} </h3>
										<p>{item.get('desc')}</p>
									</ListInfo>
							</ListItem>
							</Link>
								)
							})
						}
					<LoadMore onClick={() => {
						getMoreList(page)
					}}>更多</LoadMore>
				</Fragment>
        )
    }
}
const mapState = (state) => {
	return {
		list: state.getIn(['home','list']),
		page: state.getIn(['home','page']),
	}
}
const mapDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actions.getMoreList(page));
	}
})
export default connect(mapState,mapDispatch)(List);