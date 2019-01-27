import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecompWrapper, RecompItem } from '../style';

class Recomp extends PureComponent {
    render() {
			const {list} = this.props;
        return <RecompWrapper>
					{
						list.map((item) => {
							return  <RecompItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecompItem>
						})
					}
           
        </RecompWrapper>
    }
}
const mapState = (state) => {
    return {
			list: state.getIn(['home','recompList'])
		}
}
export default connect(mapState, null)(Recomp);