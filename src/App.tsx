
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Channels from './pages/Channels'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-dark'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/channels' element={<Channels/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
