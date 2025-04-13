import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = ()=> {
  const [mode, setMode] = useState('light'); 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const apiKey = process.env.REACT_APP_NEWS_API_KEY ;
  const pages = 9;
  const [progress,setprogress] =  useState(0)
    return (
      <div>
        <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <NavBar mode={mode} toggleMode={toggleMode} key="navbar" />
          <Routes>
            <Route path="/general" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="general" country="in" category="general" articlesPerPage={pages} />} />
            <Route path="/business" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="business" country="in" category="business" articlesPerPage={pages} />} />
            <Route path="/entertainment" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" articlesPerPage={pages} />} />
            <Route path="/health" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="health" country="in" category="health" articlesPerPage={pages} />} />
            <Route path="/science" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="science" country="in" category="science" articlesPerPage={pages} />} />
            <Route path="/sports" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="sports" country="in" category="sports" articlesPerPage={pages} />} />
            <Route path="/technology" element={<News mode={mode} setProgress={setprogress} apiKey={apiKey} key="technology" country="in" category="technology" articlesPerPage={pages} />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App
