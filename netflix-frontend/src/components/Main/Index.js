import React from 'react';
import {MainContainer,
    CenterBox,
    Title,
    SubTitle,
    Des,
    InputBox,
    Input,
    Box,
    InputButton} from './styles/main';
import SignIn from '../SignInBox/Index';
import {useHistory} from 'react-router-dom';

const Index = ({mainpath,state,setState}) => {
  let history=useHistory();
  return (
        <div>
         <MainContainer>
           <CenterBox>
           {
             mainpath!="login"?
             <Box>
              <Title>Unlimited movies, TV shows and more.</Title>
             <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
             <Des>Ready to watch? Enter your email to create or restart your membership.</Des>
             <InputBox>
                <Input placeholder="Email address" value={state.email} onChange={(e)=>setState({...state,email:e.target.value})}/>
                <InputButton type="button" value="Get Started" onClick={()=>history.push("/register")}/>
             </InputBox>
             </Box>: <SignIn/>
           }
           </CenterBox>
        </MainContainer>
        </div>
    )
}

export default Index
