import React from 'react'
import Video from './Video'
import image1 from '../../images/video1image.webp'
import image2 from '../../images/video2image.webp'

function AllVideos() {

    const allVideoStyle = {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px"
    }


  return (
    <div style={allVideoStyle}>
        <Video 
          image={image1}
          title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          channel="Idea Club Creations"
          views="2.1M"
          uptime="5 months ago"
        />


        <Video
        image={image2}
        title="Hanuman Chalisa | Lofi Version | Full hanuman chalisa | राम सिया राम"
        channel="Idea Club Creations"
        views="5.1M"
        uptime="2 years ago"
         />
        <Video />
     
       
    </div>
  )
}

export default AllVideos
