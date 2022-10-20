import './App.css';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/weather' element={<Weather />} />
    </Routes>
  )
}
export default App;
