import React from 'react'
import { useState ,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material';
import {Sidebar,Video} from './';
import {fetchFROMAPI} from  '../utils/fetchFromApi';
const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('New');
const [videos, setVideos] = useState([]);
 useEffect(()=>{
  fetchFROMAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)})
 },[selectedCategory]);
  return (
  <Stack sx={{flexDirection: {sx:"column",md:"row"}}}>
    <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0, md:2 }}}>
    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <Typography className="copyright" variant="body2" sx={{mt:1.5, color:"#fff",}} >
    Copyright 2023 yuyu 
    </Typography>
    </Box>

    {/* video  */}
    <Box p={2} sx={{overflowY:'auto' , height:'90vh' , flex:2}}>
      <Typography variant = 'h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
      {selectedCategory}  <span style={{color:'#F31503'}}>
          Videos

        </span>
      </Typography>
      <Video videos={videos}/>
    </Box>
  </Stack>

  // <Stack sx={{flexDirection : {sx:'column' , md:'row'} }} >
  //   <Box sx={{height:{sx:'auto' ,md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2} }}>
  //       <Sidebar/>
  //       <Typography className="copyright "variant='body' sx={{mt:1.5,color:'#fff'}}  >
  //         copyright 20203 by new yuyu
  //       </Typography>
  //   </Box>

  //   <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:2}} >
  //     <Typography variant='h2' fontWeight="bold" sx={{color:'white'}}>
  //       {selectedCategory} <span style={{color:'#F31503'}}>Video</span>
  //     </Typography>
  //   </Box>

  // </Stack>
  )
}

export default Feed
