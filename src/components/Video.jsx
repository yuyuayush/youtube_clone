import React from 'react'
import {Stack,Box} from '@mui/material';
import {VideoCard,VideoChannel} from './'
const Video = ({videos ,direction}) => {
  if(!videos?.length) return 'loading...';
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" justifyContent = "start" gap={2} >
    {videos.map((item,idx)=>(
     <Box key={idx}>
      
        {item.id.channelId && <VideoChannel video={item}/>}
        {item.id.videoId && <VideoCard video={item} />}
  </Box>
    ))}
    
   </Stack>
    
  )
}

export default Video