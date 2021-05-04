import styled from 'styled-components/macro';

export const Container=styled.div`
   margin-top:1rem;
   border-top:4px solid #333333;
   max-width:1000px;
   width:100%;
   margin:1.5rem auto;
   display:grid;
   justify-content: center;
   grid-template-columns: repeat(auto-fit,minmax(min-content, 230px));
   grid-auto-columns: max-content;
   align-items:center;
   grid-gap: 1rem;
   @media screen and (max-width:540px){
    grid-template-columns: repeat(auto-fit,minmax(min-content, 300px));
   }
`;

export const Pane=styled.div`
   padding:10px 20px;
   display:flex;
   flex-direction:column;
   align-items:center;
`;
export const Title =styled.span`
  color:white;
  font-size:20px;
  font-weight:normal;
  margin:14px 0px;
`;

export const Link=styled.a`
   text-decoration:none;
   font-size:16px;
   display:block;
   color:#333333;
   margin:5px;
`;

export const Text=styled.p`
   text-align:center;
   margin:20px 0px;
`;
