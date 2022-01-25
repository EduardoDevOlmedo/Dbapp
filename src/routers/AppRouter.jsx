import React from 'react';

import {Switch, Route, Redirect} from "react-router-dom"
import Navbar from '../components/Navbar';
import MenScreen from '../pages/MenScreen';
import Search from '../pages/Search';
import WomenScreen from '../pages/WomenScreen';
import CharacterScreen from '../pages/CharacterScreen';

const AppRouter = () => {
  return(
      <>
      <Navbar />
        <Switch>
            <Route exact path="/men" component={MenScreen}></Route>
            <Route exact path="/women" component={WomenScreen}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/character/:id" component={CharacterScreen}></Route>
            <Redirect to="/men"/>
        </Switch>
      </>
  )
};
export default AppRouter;
