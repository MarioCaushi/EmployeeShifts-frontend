import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home  from "./Pages/Home";
import PageError  from "./Pages/PageError";
import ManagerLogin from './Pages/ManagerLogin';
import EmployeeLogin from './Pages/EmployeeLogin';
import Employee from './Pages/Employee';
import ManagerHome from './Pages/ManagerHome';
import ManagerEdit from './Pages/ManagerEdit';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ManagerLogin' element={<ManagerLogin/>}/>
        <Route path='/EmployeeLogin' element={<EmployeeLogin/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/ManagerHome' element={<ManagerHome/>}/>
        <Route path='/ManagerEdit' element={<ManagerEdit/>}/>
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;
