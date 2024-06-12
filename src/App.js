import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import SearchPatient from './components/SearchPatient';

function App() {
  return (
    <div>
      <BrowserRouter><Routes>
        <Route path='/' element={<AddPatient/>}/>
        <Route path='/search' element={<SearchPatient/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
