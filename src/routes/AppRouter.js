import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {firebase} from "../firebase/firebase-config";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import Loading from "../components/journal/Loading";
import PublicRoutes from "./PublicRoute";
import PrivateRoutes from "./PrivateRoute";
import {startLoadingNotes} from "../actions/notes";

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
                dispatch(startLoadingNotes(user.uid))

            } else {
                setIsLoggedIn(false)
            }

            setChecking(false)
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <Loading/>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn}/>
                    <PrivateRoutes exact path="/" component={JournalScreen} isAuthenticated={isLoggedIn}/>
                    <Redirect to='/auth/login'/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
