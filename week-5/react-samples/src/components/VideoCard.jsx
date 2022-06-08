import './VideoCard.scss'
import React from 'react'

function VideoCard(props) {
  return (
    <div className='v-card-container'>
        <div className="v-card-left">
            <div className="v-thumbnail" style={{backgroundImage:`url(${props.imgUrl})`}}>
            <img src={props.imgSrc} alt={`Thumbnail : ${props.name}`} className="v-thumbnail-img" />
            </div>
        </div>
        <div className="v-card-right">
            <div className="v-title">
                {props.title}
            </div>
            <div className="v-published">
                <span> Published on: </span>{props.published}
            </div>
            <div className="v-channel">
                {props.channelName}
            </div>
            <div className="v-description">
                {props.description}
            </div>
        </div>
        
    </div>
  )
}

export default VideoCard