import React, {PureComponent} from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import  {actions}  from './store';
import {actions as actionsLogin} from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style.js'


class Header extends PureComponent { 
	getList(){
		const {focused,list,page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave,handleChangePage} = this.props;
		const jsList = list.toJS(); //  immutable 转成 JS
		const pageList = [];
		if (jsList.length) {
			for(let i = page*10; i < page*10 +10; i++) {
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)
			}
		}
		

		if (focused || mouseIn) {
			return (
				<SearchInfo
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => {
							handleChangePage(page,totalPage);
						}}>
						<span className="iconfont spin">&#xe851;</span>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}

					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	render(){
		const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
		return (
			<HeaderWrapper>
						<Link to="/"><Logo /></Link>
						
						<Nav>
						<Link to="/"><NavItem className="left on">首页</NavItem></Link>
							<NavItem className="left">下载app</NavItem>
							{
								login?
								<NavItem className="right" onClick={logout}>退出</NavItem> : 
								<Link to="/login"><NavItem className="right">登录</NavItem></Link>
							}
							
							<NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
							
							<SearchWrapper className={focused ? 'focused' : ''}>
							<CSSTransition
								timeout={200}
								in={focused}
								classNames="slide"
							>
								<NavSearch onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur}></NavSearch>
								</CSSTransition>
								<span className="iconfont zoom">&#xe62d;</span>
								{this.getList()}
							</SearchWrapper>
						</Nav>
	
						<Addition>
							<Link to="/write"><Button className="writting"><span className="iconfont">&#xe678;</span>写文章</Button></Link>
							<Button className="reg">注册</Button>
						</Addition>
				</HeaderWrapper>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			list.size === 0 && dispatch(actions.getList())
			
			dispatch(actions.focus())
		},
		handleInputBlur(){
			dispatch(actions.blur())
		},
		handleMouseEnter(){
			dispatch(actions.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actions.mouseLeave())
		},
		handleChangePage(page,totalPage){
			dispatch(actions.changePage((page+1)%totalPage))
		},
		logout(){
			dispatch(actionsLogin.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispathToProps)(Header);