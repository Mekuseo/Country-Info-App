import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryPage from './components/CountryPage';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </main>
  );
}

export default App;
