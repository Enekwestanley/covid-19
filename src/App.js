import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './Redux/covidData/countriesCovidData';
import HomePage from './components/home/Home';
import Details from './components/details/Details';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/details/:country" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
