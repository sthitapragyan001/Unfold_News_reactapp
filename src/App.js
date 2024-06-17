import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [country, setCountry] =useState("in")
  const [startdate,setStartdate] =useState('')
  const [enddate,setEnddate] = useState('')

  const Search =()=>{
    let { query } = useParams();
    return (<News apikey={apiKey} setProgress={setProgress} key= {query} country={country} category="general" search={query} startdate={startdate} enddate={enddate}/>)
  }
  return (
    <div>
      <Router>
        <Navbar setCountry={setCountry} country={country} setEnddate={setEnddate} setStartdate={setStartdate}/>
        <LoadingBar
        height={5}
        color='red'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<News apikey={apiKey} setProgress={setProgress} key="general" country={country} category="general" />} />
          <Route exact path="/business" element={<News apikey={apiKey} setProgress={setProgress} key="business" country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News apikey={apiKey} setProgress={setProgress} key="entertainment" country={country} category="entertainment" />} />
          <Route exact path="/health" element={<News apikey={apiKey} setProgress={setProgress} key="health" country={country} category="health" />} />
          <Route exact path="/science" element={<News apikey={apiKey} setProgress={setProgress} key="science" country={country} category="science" />} />
          <Route exact path="/sports" element={<News apikey={apiKey} setProgress={setProgress} key="sports" country={country} category="sports" />} />
          <Route exact path="/technology" element={<News apikey={apiKey} setProgress={setProgress} key="technology" country={country} category="technology" />} />
          <Route exact path="/search/:query" element={<Search/>}/>
          <Route exact path="/search/" element={<News apikey={apiKey} setProgress={setProgress} key="general" country={country} category=""/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;