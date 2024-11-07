import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,area,population}= country;
     
    const [visited,setVisited] =useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? `visited`: 'non-visited'}`}>
            <h3>Name: {name ?.common}</h3>
            <img src={flags.png} alt=''/>
            <p>area:{area}</p>
            <p>population:{population}</p>
            <button onClick={()=>handleVisitedCountry(country)}>count visit</button>
            <button onClick={handleVisited}>{visited? 'visited' : 'visit'}</button>
            {visited ?' I have visited' : 'pending'}
        </div>
    );
};

export default Country;