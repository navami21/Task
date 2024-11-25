// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
function CityInput() {
  const [cities,setCities]=useState([]);
  const [cityName, setCityName]=useState('');
  const handleInputChange=(event)=>{
    setCityName(event.target.value);
  };
  const handleSubmit=(event) => {
    event.preventDefault();
    if (cityName.trim()!==''){
      setCities([...cities,cityName]);
      setCityName('');
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}> <input type='text' value={cityName} onChange={handleInputChange} placeholder='enter city name'/>
      <button type='submit'>Add city</button>
    </form>
      <ul>
        {cities.map((city,index)=> (<li key={index}>{city}</li>))}
      </ul>
    </div>
  );
}

export default CityInput;
