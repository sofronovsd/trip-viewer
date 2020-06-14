import React from 'react';
import HomePage from "./components/home-page/HomePage";
import NavBar from "./components/nav-bar/NavBar";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Switch>
                    <Route component={HomePage} path="/" exact/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
