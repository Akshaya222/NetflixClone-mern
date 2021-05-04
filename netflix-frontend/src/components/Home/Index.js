import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';
import FaQ from '../Faqs/Index';
import Jumbotron from '../Jumbotron/Index';
import Header from '../Header/Index';
import Main from '../Main/Index';
import {store} from '../../Context/Context';
const Index = () => {
    const {state,setState}=useContext(store)
    let location=useLocation();
    let pathname=location.pathname.slice(1)

    return (
        <div>
              <Header pathname={pathname}/>
              <Main mainpath={pathname} state={state} setState={setState}/>
              <Jumbotron/>
              <FaQ state={state} setState={setState}/>
        </div>
    )
}

export default Index
