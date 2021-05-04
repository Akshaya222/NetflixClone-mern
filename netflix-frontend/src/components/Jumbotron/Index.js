import React from 'react';
import {Inner,Container,Title,Subtitle,Img} from './styles/jumbotron';
import data from '../../fixtures/jumbo.json';

const Index = () => {
    return (
            <Inner>
               {
                  data.map((item)=>{
                      return  <Container key={item.id} direction={item.direction} >
                      <div>
                          <Img alt={item.alt} src={item.image}></Img>
                      </div>
                      <div>
                         <Title>{item.title}</Title>
                         <Subtitle>{item.subTitle}</Subtitle>
                      </div>
                  </Container>
                  })
               }
            </Inner>
    )
}

export default Index
