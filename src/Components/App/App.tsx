import React from 'react'
import Statistics from '../ChannelStatistics/ChannelStatistics'

import {
  videosWatchedChannel,
  getWatchHistory
} from '../../analyser/analyser.js'


const App: React.FC = () => {
  //console.log(getWatchHistory.channels())
  return (
    <div>
      <Statistics />
    </div>
  )
}
export default App
