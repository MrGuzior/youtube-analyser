import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Statistics from '../ChannelStatistics/ChannelStatistics'
import Landing from '../Landing/Landing'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/stats'>
          <Statistics />
        </Route>
        <Route>
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
