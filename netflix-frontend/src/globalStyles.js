import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles=createGlobalStyle`
   *{
       box-sizing:border-box;
       margin:0;
       padding:0;
       max-width:1500px;
       font-family:'Source Sans Pro',sans-serif;
   };
   html{
    width:1300px;
    height:100%;
    display:flex;
    justify-content:center;
    background-color:black; 
    color:#333333;
   }
`;

export const PlayButton=styled.button`
outline:none;
border:2px solid black;
background-color:#fff;
color:#000;
border-radius:7px;
margin:12px 0px 12px 0px;
padding:8px 20px;
&:hover {
   color:#fff;
   background-color:#f72819
}
`;

export const Title=styled.h1`
font-size:2.5rem;
color:#fff;
`;

export const InfoContainer=styled.div`
position:absolute;
color:#fff;
width:50%;
top:15%;
left:6%
`;