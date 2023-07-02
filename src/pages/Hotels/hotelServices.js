import axios from 'axios';


const API_KEY = '669fe42b68msha19e32f88bdaa78p190ac2jsn7a828069dad7';
const Base_Url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';

export const fetchRooms = async () => {
    try{
        const response = await axios.get(`${Base_Url}/rooms`, {
       headers: {
        'X-API-KEY': API_KEY,
       },     
        });
        return response.data
    }catch (error) {
       throw new Error('Failed to fetch rooms') 
    }
}