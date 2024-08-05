
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Pages/page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
