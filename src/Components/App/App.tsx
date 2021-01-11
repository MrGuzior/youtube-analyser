import React from 'react'

import { getSubscriptionsNames, getAllSubscriptionsInfo, getHistory } from '../../analyser/analyser.js'

function App() {
  const historyList = getHistory()

  return (
    <div>
      {historyList.map(item => <p>{item.video}</p>)}
    </div>
  )
}

export default App
