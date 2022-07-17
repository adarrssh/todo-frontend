import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='load-main'>

      <div className="load-top">
        <div className="load-head">
          <h1>Hold on..., We are setting up everything</h1>
        </div>

        <div className="load-btm">

          <div className="balls">
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

        <div className='load-facts'>
         
          <h5>Did you Know?</h5>

          <h5>96% say their lives are better with to-do lists. 89% say they enjoy making lists. 28% identify as obesssive listmakers.</h5>
        </div>



      </div>
    </div >
  )
}

export default Loading