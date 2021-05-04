import React from 'react'

const Index = () => {
    return (
        <div style={{width:"900px",display:"flex",justifyContent:"center"}}>
  <video width="320" height="240" controls>
  <source src="/videos/bunny.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
   </video>
        </div>
    )
}

export default Index
