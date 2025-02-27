// import React from 'react';
// import {Grid} from '@material-ui/core';
// import VideoItem from './VideoItem';


// const VideoList = ({videos,onVideoSelect})=>{
//     const listofVideos = videos.map((video,id) =><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
//     return (
//         <Grid container spacing={10}>
//             {listofVideos}
//         </Grid>
//     );
// }

// export default VideoList;

import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}