import React,{useContext,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {store} from '../../Context/Context';
import {Container,Label,Input,InputBox,Button,RedirectBox,Link,SmallText} from './styles/signup';
import {Title} from '../../globalStyles';
import axios from 'axios';

const Index = () => {
    const {state,setState}=useContext(store)
    const [password,setPassword]=useState("")
    const [msg,setMsg]=useState("");
    const [err,setErr]=useState("")

    const history=useHistory();

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("https://still-ocean-22647.herokuapp.com/auth/signup-username",{
            username:state.email,password
        },{headers:{
            "Content-Type":"application/json"
        }}).then((res)=>{
            setErr("");
            setMsg(res.data.message)
            setTimeout(()=>{history.push("/who")},2000)
        }).catch((err)=>{
            setMsg("");
            setErr(err.response.data.message)
        })
    }

    return (
       <div>
           <Container>
           <Title>Welcome to Netflix!</Title>
           {
              msg ? <h3 style={{color:"green",textAlign:"center",marginBottom:"12px"}}>{msg}</h3>:null
          }
          {
              err ? <h3 style={{color:"red",textAlign:"center",marginBottom:"12px"}}>{err}</h3>:null
          }
           <h3>Email address : {state.email}</h3>
           <InputBox>
               <Label>Enter password</Label>
               <Input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           </InputBox>
           <Button onClick={submitHandler}>Register</Button>
           <RedirectBox>
              <SmallText>Already a user ?</SmallText>
              <Link onClick={()=>history.push("/login")}>Sign In Now</Link>
          </RedirectBox>
       </Container>
       </div>
    )
}

export default Index
