
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-dark'>
        <Routes>
          <Route path='/'/>
          <Route path='/channels'/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
