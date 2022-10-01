import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/Home";
import Try from "./routes/Try";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/try" element={<Try />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </>
  );
}

export default App;
