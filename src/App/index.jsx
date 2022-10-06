import './app.scss';
import Header from '../components/Header';
import Home from '../containers/Home';
import Cards from '../containers/Cards';
import NotFound from '../containers/NotFound';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cards" element={<Cards />} />

            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
