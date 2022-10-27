import React from "react";
import './App.css'
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import {  Route, Routes } from "react-router-dom";
import {Amplify, Auth} from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";
import Register from "./Pages/Register";
import HomeScreen from "./Pages/LoggedOut/HomeScreen";


Amplify.configure({
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "us-east-1_VxmH4D2N5",
    aws_user_pools_web_client_id: "1ooijco9d7j1rpfabvukium94p",
});

const App: React.FunctionComponent = () =>  (
    <div className="App">
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="stats/" element ={<Stats />} />
            <Route path="register/" element ={<Register />} />
            <Route path="/" element ={<HomeScreen />} />
        </Routes>
    </div>
)

// This makes it so anyone who wants to use the app will have to have an account!
export default withAuthenticator(App);