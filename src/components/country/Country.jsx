import { useState } from 'react'
import './Country.css'

const country = ({singlacountry}) => {
    console.log(singlacountry)
    const {name,flags,capital,population}=singlacountry

    const [visited, setvisited]= useState(false);

    const handalclik=()=>{
            setvisited(!visited)
    }

    return (
        <div className="country">
        <p>Name :{name.common}</p>
        <img src={flags.png} alt="" />
        <p>capital:{capital}</p>
        <p>population: {population}</p>

        <button onClick={handalclik}>{visited ? 'visited': 'Going'}</button>
        {
            visited?'Yes click here':'Not click here'
        }
        

        </div>
    );

};

export default country;