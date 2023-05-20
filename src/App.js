import {BrowserRouter,Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import ClotheCard from './components/ClotheCard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mensclothing" element={<MensClothing/>} />
        <Route path="/womensclothing" element={<WomensClothing/>} />
        <Route path="/clothecard" element={<ClotheCard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
