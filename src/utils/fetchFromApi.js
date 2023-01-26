import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '6de3f32d6dmsh36760cb9edfe55ep181fcejsnede38b997927',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFROMAPI = async(url)=>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,
    options);
    return data;
  }


