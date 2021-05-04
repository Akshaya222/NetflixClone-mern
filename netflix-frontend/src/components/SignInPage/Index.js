import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../Header/Index';
import Main from '../Main/Index';

const Index = () => {
    let location=useLocation();
    let pathname=location.pathname.slice(1)
    return (
        <div>
           <Header pathname={pathname}/> 
           <Main mainpath={pathname}/>
        </div>
    )
}

export default Index
