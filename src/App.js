import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Feedback from './components/pages/Feedback';
function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/destinations' element={ <Destinations />}></Route>
        <Route path='/feedback' element={ <Feedback />}></Route>
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;


