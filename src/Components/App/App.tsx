import React from 'react'

import { getSubscriptionsNames, getAllSubscriptionsInfo, getHistory } from '../../analyser/analyser.js'

function App() {
  getHistory()
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App
