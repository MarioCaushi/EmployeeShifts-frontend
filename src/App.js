import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home  from "./Pages/Home";
import PageError  from "./Pages/PageError";
import ManagerLogin from './Pages/ManagerLogin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ManagerLogin' element={<ManagerLogin/>}/>
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;
