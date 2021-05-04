import React,{useState,useEffect} from 'react';
import {ProfileContainer,Title,UsersContainer,UserBox,Name,Img} from './styles/profile';
import {useHistory} from 'react-router-dom';

const Index = () => {

  let history=useHistory();
  const [value,setValue]=useState(1);

  useEffect(()=>{
    let number=JSON.parse(sessionStorage.getItem("value"));
     if(number){
        setValue(number);
     }
  },[])

  const  clickHandler=(e)=>{
        console.log("div",e.target.classList[2]);
        setValue(e.target.classList[2]);
        sessionStorage.setItem("value",JSON.stringify(e.target.classList[2]))
        setTimeout(()=>{history.push("/browse")},1000)
      }

    return (
       <div>
           <ProfileContainer>
            <Title>Who is watching ? </Title>
            <UsersContainer>
                <UserBox >
                <Img width="100%" className="1" style={{border:value==1 ? "4px solid yellow":"0px"}}   onClick={(e)=>clickHandler(e)}  src="/images/users/2.png"/>
                <Name>User 1</Name>
                </UserBox>
                <UserBox>
                <Img width="100%" className="2" style={{border:value==2 ? "4px solid yellow":"0px"}}   onClick={(e)=>clickHandler(e)}  onClick={(e)=>clickHandler(e)} src="/images/users/3.png"/>
                <Name>User 2</Name>
                </UserBox>
                <UserBox>
                <Img width="100%" className="3" style={{border:value==3 ? "4px solid yellow":"0px"}}   onClick={(e)=>clickHandler(e)}  onClick={(e)=>clickHandler(e)} src="/images/users/4.png"/>
                <Name>User 3</Name>
                </UserBox>
            </UsersContainer>
        </ProfileContainer>
       </div>
    )
}

export default Index
