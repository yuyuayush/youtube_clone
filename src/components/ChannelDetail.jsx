import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material';
import {Video,VideoChannel} from './';
import { fetchFROMAPI } from '../utils/fetchFromApi';
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const {id} =useParams();
  useEffect(()=>{
    fetchFROMAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));


    fetchFROMAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  },[id])
  
  return (
    <Box minHeight="95vh">
    <Box>
      <div style={{background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(254,0,197,1) 100%)',zIndex:10,height:'300px'}}/>
      <VideoChannel channelDetail={channelDetail} marginTop='-110px'/>
    </Box>
    <Box display='flex' p='2'>
    <Box sx={{mr:{sm:'100px' }}}/>
      <Video videos={videos}/>
    </Box>
    </Box>
  )
}

export default ChannelDetail
