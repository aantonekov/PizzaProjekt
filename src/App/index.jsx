import './app.scss';
import Header from '../components/Header';
import Home from '../containers/Home';
import Cards from '../containers/Cards';
import NotFound from '../containers/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log('Input value: ', searchValue);
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home searchValue={searchValue} />} />
            <Route exact path="/cards" element={<Cards />} />

            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
