import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homepage/homePage'
import {LoginPage} from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
