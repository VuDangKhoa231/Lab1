import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Component/Navigation';
import Main from './Component/Main';
import Footer from './Component/Footer';
import DetailFilm from './Component/DetailFilm';
import Contact from './Component/Contact';
import News from './Component/News';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<DetailFilm />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/phimle' element={<Main />}></Route>
        <Route path='/phimbo' element={<Main />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
