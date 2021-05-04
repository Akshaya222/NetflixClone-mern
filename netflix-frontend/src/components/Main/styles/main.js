import styled from 'styled-components/macro';
import BgImg from '../../home-bg.jpg'

export const MainContainer=styled.div`
background-image:url(${BgImg});
width:1300px;
height:90vh;
margin:0px;
display:flex;
justify-content:center;
align-items:center;
`;

export const Box=styled.div`
  width:100%;
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const CenterBox=styled.div`
   width:65%;
   margin:auto;
`;

export const Title=styled.h1`
  font-size:3rem;
  width:70%;
  text-align:center;
  display:inline-block;
  color:#fff;
`;

export const SubTitle=styled.h2`
    color:#fff;
    width:70%;
    margin:-0.6rem auto 1.2rem;
    font-weight:normal;
  text-align:center;
  display:inline-block;
`;

export const Des=styled.p`
 color:#fff;
 margin:10px 12px 14px;
 font-weight:600;
`;

export const InputBox=styled.div`
width:76%;
`;

export const Input=styled.input`
width:65%;
outline:none;
height:55px;
padding:0px 10px
`;

export const InputButton=styled.input`
width:35%;
outline:none;
height:54px;
background:#f72819;
border:2px solid #f72819;
color:#fff;
font-size:1.2rem;
font-weight:600;
`;
