import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Layout from './layout/Layout'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App