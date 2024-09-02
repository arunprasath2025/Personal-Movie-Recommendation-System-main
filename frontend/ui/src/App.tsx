import React from 'react';
import logo from './logo.svg';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signupage';
import Historypage from './pages/Historypage';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
     
      <Router>
      <Routes>
        

       <Route path='/' element={ <Loginpage/>} />
       <Route path='/register' element={< Signuppage/>} />
       <Route path='/homepage' element={< Homepage/>} />
       <Route path='/history' element={< Historypage/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
