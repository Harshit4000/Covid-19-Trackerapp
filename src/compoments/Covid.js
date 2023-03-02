import React,{useEffect} from 'react';
function Covid(){
   async function getCoviddata(){
    try{
    const res=await fetch('https://data.covid19india.org/v4/min/data.min.json');
    const data =await res.json();
    console.log(data.AN);
    }
    catch(error){
        console.log(error);
    }

    }
    useEffect(() => {
    //   getCoviddata();
    
     
    }, []);
    
    return(
        <>
        <h1>Live</h1>
        <h2>Covid-19 Tracker App</h2>

        </>
    );
}
export default Covid