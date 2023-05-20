import {BrowserRouter,Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mens-clothing" element={<MensClothing/>} />
        <Route path="/womens-clothing" element={<WomensClothing/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
