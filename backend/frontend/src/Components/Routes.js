import React from "react";
// import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";
import Mypage from "../Routes/MyPage";
import Main from "../Routes/Main";
import Board from "../Routes/Board";
import Text from "../Routes/Text";
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Login" component={Login} />
    <Route path="/Mypage" component={Mypage} />
    <Route path="/Board" component={Board} />
    <Route path="/Text" component={Text} />
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
