import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const Githubtree = () => {
  return (
    <div className="w-full xl:w-fit flex justify-center items-center bg-slate-800 rounded-2xl [box-shadow:3px_3px_#ffffff] p-4 xl:p-1">
      {/* Container adds scrolling on mobile */}
      <div className="w-full overflow-x-auto p-4 flex justify-center no-scroll-bar">
        <div className="min-w-[700px]"> {/* Forces min width so graph doesn't squash */}
          <GitHubCalendar 
            username="s-afrid" 
            blockSize={14} // Slightly bigger blocks for touch visibility
            blockMargin={4}
            colorScheme="dark"
            fontSize={14}
          />
        </div>
      </div>
    </div>
  )
}

export default Githubtree
