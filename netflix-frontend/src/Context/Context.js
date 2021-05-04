import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const store=createContext({
    state:null,
    setState:()=>{}
})

const Context = (props) => {
    const [state,setState]=useState({
        authUser:{},
        name:"",
        films:[],
        series:[],
        filmsModified:[],
        seriesModified:[],
        email:""
    })

    useEffect(()=>{
        let films,series;
        axios.get("http://localhost:3007/films").then((res)=>{
            console.log("films",res.data)
            films=[res.data]
        }).catch((err)=>{
            console.log(err)
        })
        axios.get("http://localhost:3007/series").then((res)=>{
             series=[res.data]
            setState({...state,series:series,films:films})
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <store.Provider value={{state,setState}}>
            {props.children}
        </store.Provider>
    )
}

export default Context
