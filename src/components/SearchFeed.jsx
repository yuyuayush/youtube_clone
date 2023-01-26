import React from 'react'
import { useState ,useEffect} from 'react'
import {Box,Typography} from '@mui/material';
import {Video} from './';
import {fetchFROMAPI} from  '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {

const {searchTerm} = useParams();
const [videos, setVideos] = useState([]);
 useEffect(()=>{
  fetchFROMAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
 },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto' , height:'90vh' , flex:2}}>
      <Typography variant = 'h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
      search result for:  <span style={{color:'#F31503'}}>
          {searchTerm}

        </span> Videos
      </Typography>
      <Video videos={videos}/>
    </Box>
  )
}

export default SearchFeed
