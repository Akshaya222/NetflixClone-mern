import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FaqContainter,Title,QueContainer,Question,Img,AnsContainer,
    Answer,Box,Des,InputBox,Input,InputButton,InputContainer} from './styles/faqs'
import faqs from '../../fixtures/faqs.json';

const Index = ({state,setState}) => {
    const [clicked,setClicked]=useState(null)

    let history=useHistory();
    
    const clickhandler=(index)=>{
      if(clicked===index){
          setClicked(null)
      }
      else{
        setClicked(index)
      }
    }

    if(!faqs){
        return (
            <Title>loading...</Title>
        )
    }
    else{
        return (
            <div>
                <FaqContainter>
                    <Title>Frequently Asked Questions</Title>
                  {
                      faqs.map((faq)=>{
                          return <Box key={faq.id}>
                      <QueContainer  onClick={()=>clickhandler(faq.id)}>
                       <Question>{faq.header}</Question>
                      {
                           clicked==faq.id ? <Img src="/images/icons/close-slim.png"/> : <Img src="/images/icons/add.png"/>
                      }
                   </QueContainer>
                   {
                       clicked==faq.id ?  <AnsContainer>
                       <Answer>{faq.body}</Answer>
                   </AnsContainer>:null
                   }
                          </Box>
                      })
                  }
               <InputContainer>
               <Des>Ready to watch? Enter your email to create or restart your membership.</Des>
                <InputBox>
                <Input placeholder="Email address" value={state.email} onChange={(e)=>setState({...state,email:e.target.value})}/>
                <InputButton type="button" onClick={()=>history.push("/register")} value="Get Started"/>
               </InputBox>
               </InputContainer>
                   </FaqContainter>
            </div>
        )
    }
}

export default Index
