import styled from 'styled-components/macro';

export const Container=styled.div`
width:80%;
margin:3rem auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
`;

export const InputBox=styled.div`
margin:1rem 0px;
`;

export const Label=styled.label`
margin-right:10px;
font-size:1rem;
`;

export const Input=styled.input`
outline:none;
padding:4px 10px;
border:2px solid #f72819;
border-radius:5px;
`;

export const Button=styled.button`
background-color:#f72819;
width:30%;
outline:none;
border:2px solid #f72819;
height:50px;
margin-top:20px;
border-radius:5px;
color:#fff;
font-size:1.2rem;
text-transform:capitalize;
`;

export const SmallText=styled.p`
text-align:end;
margin:10px 20px 10px 0px;
color:rgba(255,255,255,0.7)
`;

export const  RedirectBox=styled.div`
display:flex;
align-items:center;
`;

export const Link=styled.a`
color:#fff;
text-decoration:none;
`;
