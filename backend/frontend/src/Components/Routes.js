import React from "react";
// import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Mypage from "../MyPage";
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Mypage" component={Mypage} />
    <Redirect from="*" to="/" />
  </Switch>
);

// const LoggedOutRoutes = () => (
//   <Switch>
//     <Route exact path="/" component={Auth} />
//     <Redirect from="*" to="/" />
//   </Switch>
// );

// const AppRouter = ({ isLoggedIn }) =>
//   isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

// AppRouter.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// };
const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;