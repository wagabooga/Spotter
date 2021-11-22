import React from 'react'
import LeftSideBar from './LeftSideBar'
import MiddleContainer from './MiddleContainer'
import RightSideBar from './RightSideBar'

export default function Index() {
  return (
    <div>

      <div>
        <LeftSideBar/>
      </div>

      <div>
        <MiddleContainer/>
      </div>

      <div>
        <RightSideBar/>
      </div>

    </div>
  )
}
