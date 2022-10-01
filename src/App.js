import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Try from './routes/Try'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<Try />} />
      </Routes>
    </>
  );
}

export default App;
