import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter><Routes>
        <Route path='/' element={<AddPatient/>}/>
      </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
