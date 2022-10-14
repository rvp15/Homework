
import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import Sentiment from './components/Sentiment';
import Website from './components/Website';

function App() {
  return (
    <div className="container">
     <Sidebar />
     <Reviews num={1281}/>
     <AverageRating   num1={4.6}/>
     <Sentiment  />
    <Website  num3={821} />
    </div>
  );
}

export default App;
