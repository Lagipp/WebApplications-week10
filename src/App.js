import './App.css';
import About from "./components/About"
import MyContainer from './components/MyContainer';
import Header from './components/Header';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <MyContainer /> </>}/>
          <Route path="/about" element={<> <Header /> <About /> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
