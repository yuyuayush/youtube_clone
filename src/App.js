import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,SearchFeed,VideoDetail,ChannelDetail,Feed} from './components';
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{background:"#000"}} >
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Feed/>}/>
          <Route path="/video/:id" element =      
           {<VideoDetail/>}/>
          <Route path="/search/:searchTerm" element = 
           {<SearchFeed/>}/>
          <Route path="/channel/:id" element = 
           {<ChannelDetail/>}/>

        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
