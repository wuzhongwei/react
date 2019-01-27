import React,{PureComponent} from 'react';
import {actions} from './store';
import {connect} from 'react-redux';
import List from './components/List';
import Recomp from './components/Recomp';
import Topic from './components/Topic';
import Wrt from './components/Wrt';

import {
    HomeWrapper,
    HomeLeft,
		HomeRight,
		BackTop
} from './style';


class Home extends PureComponent {
		componentDidMount() {
			if (this.props.recompList.size === 0) {
				this.props.changeHomeData();
			}
			
			this.bindEvent();
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.props.changeScrollTopShow)
		}

		handleScrollTop() {
			window.scrollTo(0,0)
		}
		bindEvent(){
			window.addEventListener('scroll', this.props.changeScrollTopShow)
		}
    render() {
        return <HomeWrapper>
            <HomeLeft>
                <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic></Topic>
								<List></List>
            </HomeLeft>
            <HomeRight>
							<Recomp></Recomp>
							<Wrt></Wrt>
						</HomeRight>
						{
							this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
						}
						
        </HomeWrapper>
    }
}
const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll']),
	recompList: state.getIn(['home','recompList']), 
})
const mapDispatch = (dispatch) => ({
	changeHomeData(){
		dispatch(actions.getHomeInfo());
	},
	changeScrollTopShow(e){
		if (document.documentElement.scrollTop> 400) {
			dispatch(actions.toggleTop(true))
		} else {
			dispatch(actions.toggleTop(false))
		}
	}
});
export default connect(mapState, mapDispatch)(Home);