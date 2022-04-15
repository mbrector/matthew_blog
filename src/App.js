import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Index from './components/Index'
import Show from './components/Show'
 import New from './components/New'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
     <Router>
       <nav>
         <Link to='/blog'>Home</Link><br />
         <Link to='/new'>Add Blog Post</Link>
       </nav>
      <Routes>
        <Route path='/blog' element={<Index />} />
        <Route path='/new' element={<New />} />
        <Route path='/:id' element={<Show />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App