import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "../layout/Nav"

export const Destinations = () => {
  const [data, setData] = useState([]);
const [baseCurrency, setBaseCurrency] = useState("")
  
const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    limit: '30',
    currency: 'USD',
    subcategory: 'hotel,bb,specialty',
    adults: '1'
  },
  headers: {
    'X-RapidAPI-Key': '669fe42b68msha19e32f88bdaa78p190ac2jsn7a828069dad7',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const fetchHotels = async () => { 
      try {
        const response = await axios.request(options);
        const resData = response.data;
          setData(resData);
          // console.log(response.data);
        const dataArray = Object.keys(response.data).map(key => response.data[key]);
        setData(dataArray);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div>
      <Nav />
    
    <div>
      <h1>Lets start <br /> the search for <br />your dream home</h1>
      <p>Your dream hottel awaits! This stunning property <br /> features all the comfort and amenities you desire</p>
    </div>






      <h1>Hotel List</h1>
      {/* Render the hotels */}
      <ul>
      
        {data.map((data, index) => (
          <li key={index}>{data.locations_id}</li>
        ))}
        
      </ul>
      <button onClick={fetchHotels}>Click</button>
    </div>
  );
};


