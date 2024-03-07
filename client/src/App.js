import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
   </>
  );
}

export default App;
