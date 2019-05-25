import React from 'react';
import styled from 'styled-components';

export const SearchInputBox = styled.div`
    height: 1rem;
    width:100%;
`;

export const SearchInput = styled.div`
    height: .7rem;
    border-radius:25px;
    width:75%;
    background: #eee;
`;
export const IndexContainer = styled.div`
    width:90%;
    margin:0 auto;
    p{margin:0}
`;

export const IconBox = styled.div`
  width:1.5rem;
  height:1.6rem;
  p{ margin:-0.2rem 0 .2rem 0}
  img{width: 80%}
`;

export const FourFold = styled.div`
    box-shadow:0 0 10px #eee;
    border-radius:5px;
    margin-top:0.2rem;
    background:#fff;
    height:3rem;
    width:100%;
    overflow:hidden;
    .left{border-left:1px #eee solid }
    .right{border-right:1px #eee solid }
    .top{border-top:1px #eee solid }
    .bottom{border-bottom:1px #eee solid
`;

export const FourFoldItem = styled.div`
  width: 50%;
  height:50%;
  .infoBox{width:70%;height:100%}
  p:nth-child(1){font-size:0.3rem;color:#000;font-weight:bold;margin:0.2rem 0 0.15rem .2rem}
  p:nth-child(2){font-size:0.23rem;color:#999;margin:0.1rem 0 0 .2rem}
  img{width:50%};
 }
`;
export const ImgRotate =styled.div`
    transform: perspective(60px) rotateY(-10deg);
`;
export const BestSeller =styled.div`
    margin-top:0.5rem;
    width:100%;
    background:#fff;
    height:auto;
    .title{height:0.8rem;padding:0 0.3rem}
    .title p:nth-child(1){font-size:0.3rem;color:#000;font-weight:bold;margin:0}
    .title p:nth-child(2){font-size:0.23rem;color:#999;margin:0}
`;
