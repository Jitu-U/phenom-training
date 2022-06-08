import './Youtube.scss'
import React from 'react'
import YTHeader from '../components/YTHeader'
import { useSelector } from 'react-redux'
import VideoCard from '../components/VideoCard'

function Youtube() {
  return (
    <div className='yt-container'>
        <YTHeader/>
        <div className="results-container">
        {
          useSelector(store=> store.filter( obj => obj.id.kind === "youtube#video")).map( vid => <VideoCard key={vid.id.videoId} title={vid.snippet.title} published={vid.snippet.publishedAt.slice(0,10)}  description={vid.snippet.description} imgSrc={vid.snippet.thumbnails.medium.url} channelName={vid.snippet.channelTitle}></VideoCard>)
        }
        </div>
        
    </div>
  )
}

export default Youtube