import React,{useEffect,useState} from 'react';
import {Button,HeaderContainer,LangButton,Input,ButtonContainer} from './styles/header';
import {useHistory} from 'react-router-dom';

const Index = ({pathname,btnNo,selectionHandler,searchTerm,setSearchTerm}) => {
    let history=useHistory();
    let [value,setValue]=useState(2);
    useEffect(()=>{
        let number=JSON.parse(sessionStorage.getItem("value"));
        setValue(Number(number)+1);
    },[value])
    return (
        <HeaderContainer>
            <div style={{display:'flex',alignItems:'center'}}>
            <img height="40px" src="/images/misc/logo.svg" onClick={()=>history.push("/home")}/>
            {
                pathname=="browse" ?   <div style={{marginLeft:"40px"}}>
                <button name="1" onClick={(e)=>selectionHandler(e)} style={{marginRight:"20px",background:"#000",color:"#fff",padding:"8px 20px",border:btnNo==1?"2px solid #fff":"2px solid black",fontSize:"20px",outline:"none",borderRadius:"5px"}}>Films</button>
                <button name="2" onClick={(e)=>selectionHandler(e)} style={{marginRight:"20px",background:"#000",color:"#fff",padding:"8px 20px",border:btnNo==2?"2px solid #fff":"2px solid black",fontSize:"20px",outline:"none",borderRadius:"5px"}}>Series</button>
            </div>:null
            }
            </div>
            {
                pathname!=""?<div style={{marginRight:'30px',width:pathname=="browse"?"20%":"5%",display:'flex',justifyContent:'space-evenly'}}>
                {
                    pathname=="browse" ? <Input  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/> :null
                }
                {
                    pathname!="login"?<img height="30px" onClick={()=>history.push("/who")} src={`/images/users/${value}.png`}/>:null
                }
                </div>:
                <ButtonContainer>
                    <LangButton>Language</LangButton>   
                    <Button onClick={()=>history.push("/login")}>Sign In</Button>
                </ButtonContainer>
            }
        </HeaderContainer>
    )
}

export default Index;
/**
 *  
 */
