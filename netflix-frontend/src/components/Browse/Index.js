import React,{useContext,useEffect,useState} from 'react';
import {store} from '../../Context/Context';
import {getFilms,getSeries} from '../../helpers/Data';
import Carousal from '../Carousal/Index';
import Header from '../Header/Index';
import Shows from '../Shows/Index';
import Fuse from 'fuse.js';
import {useLocation} from 'react-router-dom';
const Index = () => {

    let location=useLocation();
    let pathname=location.pathname.slice(1);

    const {state,setState}=useContext(store)
    const [value,setValue]=useState(1);
    const [searchTerm,setSearchTerm]=useState("")
    //type 1 for movies
    //type 2 for series
    useEffect(()=>{
        let filmsModified,results,seriesModified;
             if(state.films[0]){
                const fuse=new Fuse(state.films[0],{keys:['description','title','genre']});
                results=fuse.search(searchTerm).map(({item})=>item);
                if(results.length>0 && searchTerm.length>3){
                    filmsModified=getFilms(results);
                }
                else{
                    filmsModified=getFilms(state.films[0]);
                }
                filmsModified=[filmsModified];
             }
           if(state.series[0]){
            const fuse=new Fuse(state.series[0],{keys:['description','title','genre']});
            results=fuse.search(searchTerm).map(({item})=>item);
            if(results.length>0 && searchTerm.length>3){
                seriesModified=getSeries(results);
            }
            else{
                seriesModified=getSeries(state.series[0]);
            }
            seriesModified=[seriesModified];
       }
       setState({...state,filmsModified,seriesModified})
    },[state.series,searchTerm])
   

    const selectionHandler=(e)=>{
        setValue(e.target.name);
    }

       if(!state.filmsModified){
        return (
           <div>
                <h1 style={{color:"#fff"}}>Loading...</h1>
           </div>
        )
      }
      else{
        return (
            <div>
                 <Header pathname={pathname} searchTerm={searchTerm} setSearchTerm={setSearchTerm} btnNo={value} selectionHandler={selectionHandler}/>
                <Carousal/>
                {
                    value==1 ? 
                    <Shows shows={state.filmsModified[0]} type="1"/>:<Shows shows={state.seriesModified[0]} type="2"/>
                }
            </div>
        )
      }
    
    
}

export default Index
