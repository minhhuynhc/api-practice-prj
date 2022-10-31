import './App.css';
import UserList from './components/UserList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetail from './components/UserDetail';
import AddUser from './components/AddUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}/> 
        <Route path={`/user/:userId`} element={<UserDetail/>}/> 
        <Route path='/user/add' element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
