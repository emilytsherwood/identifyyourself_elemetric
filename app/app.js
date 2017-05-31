var React = require('react');
var ReactDOM = require('react-dom');
import { hashHistory, Router } from 'react-router';
var Main = require('./components/Main');
var LandingPage = require('./components/children/LandingPage');

const where = document.getElementById('app');

ReactDOM.render(
    <Main />,
    document.getElementById('app')
)


// window.onload = function() {
//   React.render(
//     <LandingPage />,
//     document.getElementById('app')
//   )
// }