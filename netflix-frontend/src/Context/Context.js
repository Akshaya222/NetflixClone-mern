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
        axios.get("https://still-ocean-22647.herokuapp.com/films").then((res)=>{
            films=[res.data]
        }).catch((err)=>{
            console.log(err)
        })
        axios.get("https://still-ocean-22647.herokuapp.com/series").then((res)=>{
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
