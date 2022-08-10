import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import TicketControl from "./components/TicketControl/TicketControl"
import Signin from './components/Signin'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<TicketControl />}/>
        <Route path='/signin' element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
