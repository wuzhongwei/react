import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position:absolute;
    left:0;
    top:56px;
    right: 0;
    bottom: 56px;
    background:#eee;
    z-index: 1;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    padding-top: 20px;
`;

export const Input = styled.input`
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding:0 10px;
    color: #777;
    display: block;
    margin: 10px auto;

`;

export const Button = styled.div`
    width: 200px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background:#3194d0;
    border-radius: 15px;
    margin: 0 auto;
    text-align: center;

`;
