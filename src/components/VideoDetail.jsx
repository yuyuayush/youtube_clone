import React from 'react'
import { useState,useEffect } from 'react'
import {Link, useParams}  from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import {Video} from './';
import { fetchFROMAPI } from '../utils/fetchFromApi';
import { Typography,Box,Stack } from '@mui/material';
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();
  useEffect(()=>{
    fetchFROMAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]));
  },[id]);

fetchFROMAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items));
  if(!videoDetail?.snippet) return 'Loading...';
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}} = videoDetail;

  

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column' , md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky' ,top:'86px' }}>
        <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`}/>
        <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={2} px={2} >
    <Link to={`/channel/${channelId}`}>
      <Typography>
        {channelTitle}
        <CheckCircle sx={{fontSize:'12px' ,color:'gray',ml:'5px'}}/>
      </Typography>
    </Link>
    <Stack direction='row' gap='20px' alignItems='center'>
      <Typography variant="body1" sx={{opacity:0.7}}>
        {parseInt(viewCount).toLocaleString()} views
      </Typography>
      <Typography variant="body1" sx={{opacity:0.7}}>
        {parseInt(likeCount).toLocaleString()} likes

      </Typography>
    </Stack>
        </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
<Video videos={videos} direction="column"  />
      </Box>
      </Stack>
     
    </Box>
  )
}

export default VideoDetail
