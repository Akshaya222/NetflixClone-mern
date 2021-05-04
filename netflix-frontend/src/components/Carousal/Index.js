import React,{useState,useEffect} from 'react';
import {Carousal,Buttons,Img} from './styles/carousal' ;
import {data} from '../data/images';
import {PlayButton} from '../../globalStyles';
import {Title,InfoContainer} from '../../globalStyles';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import {useHistory} from 'react-router-dom'

const Index = () => {
    const [image,setImage]=useState(1);
    let history=useHistory()

    useEffect(()=>{
       let interval=setInterval(()=>nextImage(),3000);
       return ()=>{
           clearInterval(interval);
       }
    },[image])

   const nextImage=()=>{
       let index=image;
       if(index==data.length-1){
           index=0
       }
       else{
           index=index+1;
       }
       setImage(index)  
    }

    const previousImage=()=>{
        let index=image;
        if(index==0){
            index=data.length-1;
        }
        else{
            index=index-1;
        }
        setImage(index)
    }
    const buttonsHandler=(e)=>{
        setImage(e.target.name)
    }
    return (
        <div>
          <Carousal>
              <span style={{color:"#fff"}} onClick={previousImage}><FaArrowAltCircleLeft/></span>
              <Img width="95%" height="500px" src={data[image].image}/>
              <InfoContainer>
                  <Title>Watch {data[image].title} Now</Title>
                  <p>{data[image].description}</p>
                  <PlayButton onClick={()=>history.push("/video")}>play</PlayButton>
              </InfoContainer>
              <Buttons>
                  <button style={{display:'inline',display:'flex',alignItems:'center',padding:'0px 3px',background:image==0?'#000':null,color:image==0?'#fff':'#000'}} name="0" onClick={(e)=>buttonsHandler(e)}>o</button>
                  <button style={{display:'inline',display:'flex',alignItems:'center',padding:'0px 3px',background:image==1?'#000':null,color:image==1?'#fff':'#000'}} name="1" onClick={(e)=>buttonsHandler(e)}>o</button>
                  <button style={{display:'inline',display:'flex',alignItems:'center',padding:'0px 3px',background:image==2?'#000':null,color:image==2?'#fff':'#000'}} name="2" onClick={(e)=>buttonsHandler(e)}>o</button>
                  <button style={{display:'inline',display:'flex',alignItems:'center',padding:'0px 3px',background:image==3?'#000':null,color:image==3?'#fff':'#000'}} name="3" onClick={(e)=>buttonsHandler(e)}>o</button>
              </Buttons>
              <span  style={{color:"#fff"}} onClick={nextImage}><FaArrowAltCircleRight/></span>
          </Carousal>  
        </div>
    )
}

export default Index
