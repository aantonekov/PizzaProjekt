import './app.scss';
import Header from '../components/Header';
import Home from '../containers/Home';
import Cards from '../containers/Cards';
import NotFound from '../containers/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

export const SearchContext = createContext('');
export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cards" element={<Cards />} />

              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}
