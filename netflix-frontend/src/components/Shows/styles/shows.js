import styled from 'styled-components/macro';


export const Container=styled.div`
margin:10px 20px!important;
`;

export const Title=styled.h2`
color:#fff;
`;

export const GenreContainer=styled.div`
margin:30px 0px;
`;

export const BoxContainer=styled.div`
display:flex;
margin:20px 0px;
`;

export const Name=styled.h3`
     width:85%;
     position:absolute;
     display:none;
     top:6%;
     left:10%;
`;

export const Des=styled.small`
    display:none;
    width:92%;
    white-space:normal;
    position:absolute;
    bottom:4%;
    left:5%;
    right:5%;
`;

export const Img=styled.img`
    height:100%;
    border-radius:6%;
`;
export const Box=styled.div`
    width:18%;
    margin:10px;
    opacity:1;
    height:150px;
    position: relative;
    transition:ease-in 0.5s all;
    &:hover{
        opacity:0.6;
        transform:scale(1,1.15);
        ${Name}{
            display:inline;
            color:#fff;
            transform:scale(1)
        }
        ${Des}{
            display:inline;
            font-size:11px;
            color:rgba(255,255,255,0.8);
            transform:scale(1)
        }
        ${Img}{
            border-radius:4%!important;
        }
    }
`;

