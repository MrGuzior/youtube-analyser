import React from 'react'

import {
  getSubscriptionsNames,
  getAllSubscriptionsInfo,
  getWatchHistory,
  videosWatchedChannel,
  getAllWatchedChannels
} from '../../analyser/analyser.js'

function App() {
  console.log(getAllWatchedChannels())

  return (
    <div>
      <p>lol</p>
    </div>
  )
}

export default App
