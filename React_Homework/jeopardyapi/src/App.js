
import './App.css';
import {Route, Routes} from "react-router-dom"
import Main from './pages/Main';
import Gamepage from './pages/Gamepage';
import NextLevel from './pages/NextLevel';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
<Nav/>
    <Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/play' element={<Gamepage/>}></Route>
<Route path='/nextlevel' element={<NextLevel/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
