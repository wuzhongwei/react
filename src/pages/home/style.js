import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left

    img {
        width: 100%;
        display: blcok;
    }
`;

export const HomeRight = styled.div`
   width: 280px;
   float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: solid 1px #dcdcdc;
`;

export const TopicItem = styled.div`
	float:left;
	background:red;
	height: 32px;
	line-height: 32px;
	font-size:14px;
	background:#f7f7f7;
	color: #000;
	border: solid 1px #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 10px;

	img {
		width: 32px;
		height: 32px;
		float:left;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: solid 1px #dcdcdc;
	overflow: hidden;

	img {
		width: 125px;
		height:100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;

	h3 {
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	p {
		font-size: 13px;
		line-height: 24px;
		color:#999;
	}
`;

export const RecompWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecompItem = styled.div`
	width:280px;
	height: 50px;
	background-size: 100%;
	background: url(${(props) => props.imgUrl});
	margin-top: 20px;
`;

export const WrtWrapper = styled.div` 
	width: 100%;
	border: solid 1px #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
	box-sizing: border-box;
`;
export const LoadMore = styled.div` 
	width: 100%;
	text-align:center;
	line-height: 40px;
	background:red;
	border-radius: 20px;
	color:#fff;
	margin: 30px 0;
	cursor: pointer;
`;


export const BackTop = styled.div` 
	position: fixed;
	width: 60px;
	font-size: 12px;
	line-height: 60px;
	text-align: center;
	border: solid 1px #ccc;
	right: 100px; 
	bottom: 100px;
`;

