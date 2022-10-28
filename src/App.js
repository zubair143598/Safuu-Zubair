import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import Account from './Pages/Account';
import Swap from './Pages/Swap';
import Calculator from './Pages/Calculator';
function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
   <Route index path='/' element={<Home/>} />
    <Route index path='dashboard' element={<Home/>} />
    <Route index path='account' element={<Account/>} />
    <Route index path='swap' element={<Swap/>} />
    <Route index path='calculator' element={<Calculator/>} />



   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
