import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countires.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div>
            <h1>Now see all world countries: {countries.length}</h1>
            <div className="countries-coniener">
            {
               countries.map(singlacountry=><Country 
                key={singlacountry.CCA3} 
                singlacountry={singlacountry}></Country>) 
            }

            </div>
           
        </div>
    );
};

export default Countries;
