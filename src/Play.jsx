import React from 'react'
import { Player } from 'video-react';

const Play = () => {
  return (
    <div className="relative flex flex-col ">
        <Player
          className="video-react-custom !pt-2 pb-10 px-2 w-full"
          playsInline
          src="https://media.w3.org/2010/05/video/movie_300.mp4"
        />
    </div>
  )
}

export default Play