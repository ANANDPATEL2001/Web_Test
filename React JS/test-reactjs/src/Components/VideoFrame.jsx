import React from 'react'
// import videoBg from "../Components/film.mp4"
import newvideoBg from "../Assets/videoplayback.mp4"

const VideoFrame = () => {
    return (
        <div className='w-full h-full absolute'>
            <video
                className='w-full h-full object-cover absolute'
                // src={require("https://www.youtube.com/watch?v=fxut83NnN7g")}
                autoPlay loop muted controls >
                <source src={"https://www.youtube.com/watch?v=fxut83NnN7g"} type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoFrame