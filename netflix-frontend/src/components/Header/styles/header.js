import styled from 'styled-components/macro';
import Search from '../../../search.png';

export const Button=styled.button`
    background:#f72819;
    height:30px;
    width:80px;
    border:2px solid #f72819;
    outline:none;
    border-radius:4px;
    color:#fff;
    padding:3px;
`;

export const LangButton=styled.button`
 height:30px;
 border:1px solid #fff;
 background:transparent;
 outline:none;
 border-radius:2px;
 color:#fff;
 padding:5px 10px;
`;

export const HeaderContainer=styled.div`
    display:flex;
    background-color:rgba(0,0,0,0.1);
    align-items:center;
    justify-content:space-between;
    padding:20px;
    max-width:1200px;
`;

export const Input=styled.input`
padding-left:20px;
background: url(${Search}) no-repeat;
background-size:9%;
background-position: 99% 50%;
filter: brightness(0) invert(0.5);
outline:none;
border-radius:10px;
margin-right:20px;
color:#fff;
`;

export const ButtonContainer=styled.div`
display:flex;
justify-content:space-evenly;
width:25%
`;

