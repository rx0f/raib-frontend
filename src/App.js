import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Pricing from './routes/Pricing'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
