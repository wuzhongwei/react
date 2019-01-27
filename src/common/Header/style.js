import styled from 'styled-components';
import logopic from '../../statics/s.png';

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    position:absolute;
    left: 0;
    top: 0;
    height:56px;
    width:100px;
    background: url(${logopic});
    background-size:100%;
`;

export const Nav = styled.div`
    width: 960px;
    height:100%;
    padding-right: 70px;
    margin: 0 auto;
    box-sizing:border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color:#333;
    &.left {
        float:left;
    }

    &.right {
        float:right;
        color:#969696;
    }

    &.on {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height:38px;
    border-radius: 19px;
    background:#eee;
    border: 0;
    outline: none;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing:border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder {
        color: #999;
		}
		&.slide-enter {
			transition: all .2s ease-out;
		}
		&.slide-enter-active {
			width: 240px;
		}

		&.slide-exit {
			transition: all .2s ease-out;
		}

		&.slide-exit-active {
			width: 160px;
		}
`;


export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top:9px;
    border: solid 1px #ec6149;
    margin-right:20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background:#ec6149;
    }
`; 

export const SearchWrapper = styled.div`
    float: left;
		position:relative;
		&.focused {
			& > input {
				width: 240px;
			}

			& > .iconfont {
				background:#777;
				color: #fff;
			}
		}		
    .zoom {
        position:absolute;
        right: 5px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius: 15px;
        text-align:center;
		}
		
`;

export const SearchInfo = styled.div`
   position:absolute;
   left:0;
   top:56px;
   width: 240px;
   padding:0 20px;
   z-index:2;
	 box-shadow: 0 0 8px rgba(0,0,0,0.2);
	 background-color: #fff;
`; 

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color:#969696;
`;
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;





