import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login';
import Dashboard from '../dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
