import React,{useState,useContext} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {SignInContainer,Title,Input,Form,Button,SmallText,RedirectBox,Link} from './styles/signin'

const Index = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [err,setErr]=useState("")
    const history=useHistory();

    const submitHandler=(e)=>{
        e.preventDefault();        
        axios.put("https://still-ocean-22647.herokuapp.com/auth/login-username",{
           username:email,password
        }).then((res)=>{
            setErr("");
            setMsg(res.data.message)
            setTimeout(()=>{history.push("/who")},2000)
        }).catch((err)=>{
            setMsg("");
            setErr(err.response.data.message)
        })
    }

    return (
       <SignInContainer>
          {
              msg ? <h3 style={{color:"green",textAlign:"center"}}>{msg}</h3>:null
          }
          {
              err ? <h3 style={{color:"red",textAlign:"center"}}>{err}</h3>:null
          }
           <Title>Sign In</Title>
          <Form>
          <Input value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
           <Input value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
           <Button onClick={submitHandler}>sign in</Button>
          </Form>
          <SmallText>forgot password ?</SmallText>
          <RedirectBox>
              <SmallText>New to Netflix ?</SmallText>
              <Link onClick={()=>history.push("/")}>Sign Up Now</Link>
          </RedirectBox>
       </SignInContainer>
    )
}

export default Index
