import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth">
                        <AuthRouter/>
                    </Route>
                    <Route exact path="/">
                        <JournalScreen/>
                    </Route>
                    <Redirect to='/auth/login'/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
