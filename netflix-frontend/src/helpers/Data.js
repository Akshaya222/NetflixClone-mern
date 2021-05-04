 export const getFilms=(films)=>{
    let filmsNew=[{
        title:'Drama',
        data:films.filter((film)=>film.genre=="drama")
    },
    {
        title:'Suspense',
        data:films.filter((film)=>film.genre=="suspense")
    },
    {
        title:'Children',
        data:films.filter((film)=>film.genre=="children")  
    },
    {
        title:'Thriller',
        data:films.filter((film)=>film.genre=="thriller")  
    },
    {
        title:'Romance',
        data:films.filter((film)=>film.genre=="romance")  
    }];
    return filmsNew;
}

export const getSeries=(series)=>{
    let seriesNew=[{
        title:'Documentaries',
        data:series.filter((series)=>series.genre=="documentaries")
    },
    {
        title:'Comedies',
        data:series.filter((series)=>series.genre=="comedies")
    },
    {
        title:'Children',
        data:series.filter((series)=>series.genre=="children")
    },
    {
        title:'Crime',
        data:series.filter((series)=>series.genre=="crime")
    },
    {
        title:'Feel Good',
        data:series.filter((series)=>series.genre=="feel-good")
    },
    ];
    return seriesNew;
}