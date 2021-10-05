import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import usePictureInPicture from 'react-use-pip'

export default function Home() {

  const videoRef = useRef(null)
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef)

  return (
    <div className="App">
      <video ref={videoRef} autoPlay muted controls loop width="100%">
        <source src="https://dawchihliou.github.io/react-use-pip/video-sample.mp4" />
      </video>
      {isPictureInPictureAvailable && (
        <button
          onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
        >
          {isPictureInPictureActive ? 'Disable' : 'Enable'} Picture in Picture
        </button>
      )}
    </div>
  )
}
