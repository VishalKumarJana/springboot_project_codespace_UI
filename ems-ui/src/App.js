import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListComponent from './components/ListComponent';

function App() {
  return (
    <div>
        <Router>
          <HeaderComponent/>
            <div className="container">
                <Routes>
                  <Route exact path="/" Component={ListComponent}></Route>
                  <Route path="/employees" Component={ListComponent}></Route>
                  <Route path="/add-employee" Component={AddEmployeeComponent}></Route>
                  <Route path="/edit-employee/:employeeId" Component={AddEmployeeComponent}></Route>
                </Routes>
            </div>
          <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;

