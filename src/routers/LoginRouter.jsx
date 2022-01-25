import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom"
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';
import {AuthContext} from "../context/AuthContext"
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginRouter = () => {
  
  const {log} = useContext(AuthContext)
  

  return (
    <Router>
        <Switch>
            <PublicRouter auth={log} path="/login" component={LoginScreen}/>
            <PrivateRouter auth={log} path="/" component={AppRouter}/>
        </Switch>
    </Router>
  )
};

export default LoginRouter;