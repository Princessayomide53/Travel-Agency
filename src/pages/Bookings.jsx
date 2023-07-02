import React,  { useEffect, useState }  from 'react';
import axios from 'axios';

export const Bookings = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityiusUnit=KM&hotelSource=ALLCode=PAR&radius=5&rad');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

useEffect(() => {
  fetchData();
}, []);
  return (
    <div>
      <div>bookings</div>
      <button className='bg-red-200' onClick={fetchData}>click</button>
    </div>
  )
}
