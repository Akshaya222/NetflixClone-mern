import React from 'react';
import {Title} from './styles/shows';
import {Box,Img,Des,Name,BoxContainer,GenreContainer,Container} from './styles/shows';
import { useHistory } from "react-router-dom";

const Index = ({shows,type}) => {
    let history=useHistory();
    let showType;
    if(type==1){
        showType="films"
    }
    else if(type==2){
        showType="series"
    }

    if(!shows){
        return (
            <h1>Loading...</h1>
        )
    }
    else{
        return (
            <Container>
                {
                    shows.map((genre,index)=>{
                        if(genre.data.length>0){
                            return <GenreContainer key={index} >
                            <Title>{genre.title}</Title>
                            <BoxContainer>
                            {
                               genre.data.map((show)=>{
                                return <Box key={show._id} onClick={()=>{history.push("/show",{show,showType})}}>
                                    <Name>{show.title}</Name>
                                  <Img width="100%" src={`/images/${showType}/${show.genre}/${show.slug}/small.jpg`}/>
                                  <Des>{show.description.slice(0,50)}....</Des>
                              </Box>
                               })
                            }
                            </BoxContainer>
                         </GenreContainer>
                        }
                    })
                }
            </Container>
        )
    }
}

export default Index
