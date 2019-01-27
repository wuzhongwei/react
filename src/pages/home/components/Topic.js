import React,{PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect } from 'react-redux';

class Topic extends PureComponent {
    render() {
        return <TopicWrapper>
					{
						this.props.list.map((itme) => {
							return (
								<TopicItem key={itme.get('id')}>
											<img src={itme.get('imgUrl')} alt="" />
											{
												itme.get('title')
											}
								</TopicItem>
							)
						})
					}
           
            
        </TopicWrapper>
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic);