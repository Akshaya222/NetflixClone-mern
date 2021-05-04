import styled from 'styled-components/macro';

export const ProfileContainer =styled.div`
width:80%;
margin:3rem auto 2rem;
align-items:center;
min-height:400px;
`;

export const Title = styled.h1`
color:#fff;
font-size:2.5rem;
text-align:center
`;

export const UsersContainer=styled.div`
display:flex;
justify-content:space-evenly;
`;

export const UserBox=styled.div`
width:25%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-space-around;
`;
export const Name=styled.h3`
color:#fff;
margin:10px 0px;;
`;

export const Img=styled.img`
&:hover{
    border:4px solid yellow;
}
`;

// left:${({ click }) => (click ? 0 : '-120%')};