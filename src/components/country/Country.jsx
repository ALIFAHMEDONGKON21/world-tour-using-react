import { useState } from 'react'
import './Country.css'

const country = ({singlacountry ,showmarkvistitedcountry}) => {
   
    const {name,flags,capital,population}=singlacountry

    const [visited, setvisited]= useState(false);

    const handalclik=()=>{
            setvisited(!visited)
    }

  

    return (
        <div className={`country ${visited && 'visited'}`}>
        
        <p>Name :{name.common}</p>
        <img src={flags.png} alt="" />
        <p>capital:{capital}</p>
        <p>population: {population}</p>
        <button onClick={ ()=>showmarkvistitedcountry(singlacountry)}>Mark visited</button>

        <button onClick={handalclik}>{visited ? 'visited': 'Going'}</button>
        {
            visited?'Yes click here':'Not click here'
        }
        

        </div>
    );

};

export default country;