import React from 'react';
import { InfoContainer } from '../../globalStyles';
import { Button } from '../Header/styles/header';
import { Title } from '../Shows/styles/shows';
import {Img,Des,Extra,ImgContainer} from './styles/showpage';
import { useHistory,useLocation } from "react-router-dom";
import Header from '../Header/Index';

const Index = () => {
    const location = useLocation();
    const showType = location.state.showType;
    let show=location.state.show;
    let history=useHistory();
    let pathname=location.pathname.slice(1)

    return (
        <div>
            <Header pathname={pathname}/>
           <Img height="420px" src={`/images/${showType}/${show.genre}/${show.slug}/large.jpg`}/>
           <InfoContainer>
               <Title>{show.title}</Title>
               <Des>{show.description}</Des>
               <Button onClick={()=>history.push("/video")}>play</Button>
           </InfoContainer>
           <Extra>
              <h1 style={{marginLeft:"20px"}}>Trailers & Extras</h1>
              <ImgContainer>
              <Img onClick={()=>history.push("/video")} style={{marin:"1rem 0px"}} src="/images/bunny/images.jpeg"/>
              </ImgContainer>
           </Extra>
        </div>
    )
}

export default Index
