import React, {useState} from 'react'

function Presentation() {

  const [mutedVideo, setMutedVideo] = useState(true);

  return (

    <div className="width-[50vw] height-[50vh] border-2 rounded-lg px-10 py-10 mx-20 my-20">
      <div>
        <p>Presentation</p>
      </div>



    </div>

  )
}

export default Presentation