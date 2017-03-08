import React from 'react';
import ReactDom from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes/routes.jsx';
import 'bootstrap/dist/css/bootstrap.css'

let root=document.getElementById("app");
ReactDom.render(
    <Router routes={routes} history={browserHistory}/>,root
);