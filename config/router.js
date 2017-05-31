/*// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the components
var Main = require("../components/Main");
var LandingPage = require("../components/LandingPage");
var PicQuestion = require("../components/PicQuestion");
var MultiQuestion = require("../components/MultiQuestion");
var InputQuestion = require("../components/InputQuestion");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={LandingPage}>

      <Route path="input" component={InputQuestion} />
      <Route path="picture" component={PicQuestion} />
      <Route path="multiselect" component={MultiQuestion} />
      {/* If user selects any other path... we get the Info Route */}
//       <IndexRoute component={LandingPage} />

//     </Route>
//   </Router>

// );*/

