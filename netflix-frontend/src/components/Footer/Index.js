import React from 'react';
import {Container,Pane,Title,Link,Text} from './styles/footer';

const Index = () => {
    return (
      <div>
           <Container>
           <Pane>
              <Title>Contact us.</Title>
              <Link href="#">FAQ</Link>
              <Link href="#">Investor Relations</Link>
              <Link href="#">Ways to Watch</Link>
              <Link href="#">Corporate Information</Link>
              <Link href="#">Netflix Originals</Link>
           </Pane>
           <Pane>
               <Link href="#">Help Centre</Link>
               <Link href="#">Jobs</Link>
               <Link href="#">Terms of Use</Link>
               <Link href="#">Contact Us</Link>
           </Pane>
           <Pane>
           <Link href="#">Account</Link>
           <Link href="#">Redeem gift cards</Link>
           <Link href="#">Privacy</Link>
           <Link href="#">Speed Test</Link>
           </Pane>
           <Pane>
           <Link href="#">Media Centre</Link>
           <Link href="#">Buy gift cards</Link>
           <Link href="#">Cookie Preferences</Link>
           <Link href="#">Legal Notices</Link>
           </Pane>
       </Container>
       <Text>Netflix United Kingdom @ copyrights</Text>
      </div>
    )
}

export default Index
