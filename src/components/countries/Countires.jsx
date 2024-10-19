import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countires.css'
import country from "../country/country";


const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [countryvisited, setCountryvisited]=useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);
    
    const showmarkvistitedcountry= (country) =>{
    console.log('click here one stepp up');
    
    const  newvisitedarray=[...countryvisited,country];
    setCountryvisited(newvisitedarray);

    }
    return (
        <div>
            <h1>Now see all world countries: {countries.length}</h1>
            <div>
                <h5>visited countrires :{countryvisited.length}</h5>
                <ul>
                 {
                    countryvisited.map(country =><li key={country.CCA3}>{country.name.common}</li>)
                 }
                </ul>
            </div>
            <div className="countries-coniener">
            {
               countries.map(singlacountry=><Country 
                key={singlacountry.CCA3} 
                showmarkvistitedcountry={showmarkvistitedcountry}
                singlacountry={singlacountry}></Country>) 
            }

            </div>
           
        </div>
    );
};

export default Countries;
