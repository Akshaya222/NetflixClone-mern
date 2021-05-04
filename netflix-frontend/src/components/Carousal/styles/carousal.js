import styled from 'styled-components/macro';

export const Carousal=styled.div`
max-width:1200px;
margin:auto;
position:relative;
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:2rem;
`;

export const Buttons=styled.div`
position:absolute;
width:10%;
display:flex;
justify-content:space-between;
padding:5px;
top:80%;
left:45%;
`;

export const Img=styled.img`
transition:ease-in 0.5s all;
transform:scale(1);
`;
