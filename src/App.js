// import React from 'react';
// import {Grid} from '@material-ui/core';
// import youtube from './api/youtube';
// import SearchBar from './Components/SearchBar.js';
// import VideoDetail from './Components/VideoDetail.js';
// import VideoList from './Components/VideoList';
// class App extends React.Component{
//     state = {
//         videos: [],
//         selectedVideo: null,
//         SearchTerm:""
//     }

//     componentDidMount(){
//         this.handleSubmit();
//     }
//     handleSubmit = async (SearchTerm)=>{
//         const response = await youtube.get('search',{params:{
//             part:'snippet',
//             maxResults: 5,
//             key:"AIzaSyDKRkXR5VhXQQnzy5nVpN03x5VQDPZrHFU",
//             q:SearchTerm
//         }});
//         this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
//         console.log(response);
//     }
//     onVideoSelect = (video) =>{
//         this.setState({selectedVideo:video});
//     }
//     render(){
//         const { selectedVideo,videos } = this.state;
//         return(
//             <Grid justify="center" container spacing={10}>
//                 <Grid item xs={12}>
//                     <Grid container spacing={10}>
//                         <Grid item xs={12}>
//                             <SearchBar onFormSubmit={this.handleSubmit}/>
//                         </Grid>
//                         <Grid item xs={8}>
//                             <VideoDetail video={selectedVideo}/>
//                         </Grid>
//                         <Grid item xs={4}>
//                             <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         );
//     };
// }

// export default App;
import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import SearchBar from './Components/SearchBar.js';
import VideoDetail from './Components/VideoDetail.js';
import VideoList from './Components/VideoList';

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "apikey",
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}