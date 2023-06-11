import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
// import { ErrorMessage } from 'formik';

 function Hotels  () {

  // const fetchSomeData = async () => {
  //   const response = await axios.get('https://hotels-com-provider.p.rapidapi.com/v2/meta/convert/slug-id', {
  //     headers: {
  //       'x-rapidapi-key': '669fe42b68msha19e32f88bdaa78p190ac2jsn7a828069dad7',
  //       'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
  //     },
  //   });
  //   console.log(response);
  
  //   return response.data;
  // };

  const { data, isLoading, error } = useQuery(['hotelImages'], () =>
  axios.get('https://hotels-com-provider.p.rapidapi.com/v2/meta/convert/slug-id', {
    headers: {
      'Authorization': '669fe42b68msha19e32f88bdaa78p190ac2jsn7a828069dad7',
    },
  })
);

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

return (
  <div>
    {data.map((image) => (
      <img key={image.id} src={image.url} alt={image.description} />
    ))}
  </div>
);
};


  
  export default Hotels;
  
  


//   return (
//     <>
//     <h1>Hotels</h1>
//     <div className='block'>{renderedData}</div>
//   </>

//   )
// }
// export default Hotels;