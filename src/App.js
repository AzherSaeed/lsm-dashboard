import React , {useState} from 'react'
import './App.css';
import Contactqueries from './Layout/contactquery/Contactqueries';
import Registration from './Layout/registration/Registration';
import AdmissionTable from './Layout/admissiontable/AdmissionTable';
import SignIn from './Layout/auth/SignIn';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import SettingUserContext from './SettingUserContext/SettingUserContext';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  
  return (
    <div>
      <SettingUserContext isLogin={isLogin} setIsLogin={setIsLogin} />
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <ProtectedRoute accessibleRoles={['admin']} path="/admission" component={AdmissionTable} />
          <ProtectedRoute accessibleRoles={['admin']} path="/contactQueries" component={Contactqueries} />
          <ProtectedRoute accessibleRoles={['admin']} path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
