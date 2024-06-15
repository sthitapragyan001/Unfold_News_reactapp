import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  console.log(apiKey)
  const [progress, setProgress] = useState(0)
  const Search =()=>{
    let { query } = useParams();
    return (<News apikey={apiKey} setProgress={setProgress} key= {query} country="in" category="general" search={query}/>)
  }
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
        height={5}
        color='red'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<News apikey={apiKey} setProgress={setProgress} key="general" country="in" category="general" />} />
          <Route exact path="/business" element={<News apikey={apiKey} setProgress={setProgress} key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apikey={apiKey} setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News apikey={apiKey} setProgress={setProgress} key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News apikey={apiKey} setProgress={setProgress} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News apikey={apiKey} setProgress={setProgress} key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News apikey={apiKey} setProgress={setProgress} key="technology" country="in" category="technology" />} />
          <Route exact path="/search/:query" element={<Search/>}/>
          <Route exact path="/search/" element={<News apikey={apiKey} setProgress={setProgress} key="general" country="in" category="" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;