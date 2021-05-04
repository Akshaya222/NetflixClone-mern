import styled from 'styled-components/macro';



export const Container=styled.div`
   display:flex;
   justify-content:space-around;
   align-items:center;
   padding:1rem;
   margin:30px;
   border-bottom:2px solid #333333;
   overflow:wrap;
   //flex-direction:${({direction})=>direction}
   flex-direction:row;

   @media screen and (max-width:960px){
       display:flex;
       flex-direction:column
   }
   @media screen and (max-width:540px){
    display:flex;
       flex-direction:column;
       width:350px;
       margin:0 auto;
   }
`;

export const Inner=styled.div`
  margin:0 auto;
  max-width:1100px;
  width:100%;
  & ${Container}:nth-child(even)  {
       flex-direction:row-reverse
      }

    @media screen and (max-width:960px){
        & ${Container}:nth-child(even)  {
       flex-direction:column-reverse;
      }
    }
`;

export const Title=styled.h1`
   margin:10px;
   font-size:bolder;
   color:white;
   text-align:center;
`;

export const Subtitle=styled.p`
   margin:10px 20px;
   color:#f0eded;
   text-align:center;
   @media screen and (max-width:540px){
       white-space:normal;
   }

`;

export const Img=styled.img`
  height:250px;
  @media screen and (max-width:540px){
      width:250px;
      margin:0px auto;
  }
`;
