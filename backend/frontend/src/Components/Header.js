import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../logo.png";
import { HashRouter as Router, Link } from "react-router-dom";
import axios from "axios";


class Header extends React.Component {
  state= {
    isLogin:"false"
  }

  componentWillMount(){
    axios
    .get("http://127.0.0.1:8000/auth/mypage/8/", {
      headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
    })
    .then(res =>
      this.setState({
        isLogin:"true"
      })
    )
    .catch(err => console.log(err));
  }

  logout =e =>{
    axios
    .get("http://127.0.0.1:8000/auth/logout")
    .then(res =>
      alert("로그아웃 되었습니다."),
      this.setState({
        isLogin:"false"
      }),
      localStorage.removeItem("token")
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} style={{ width: "3em", height: "3em" }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Router>
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link>
                  <Link to="/board" style={{ color: "#000" }}>
                    게시판
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {this.state.isLogin ==="false"
                  ?
                  (
                  <Link to="/login" style={{ color: "#000" }}>
                    로그인
                  </Link>
                  ):(
                    <Link to="/login" style={{ color: "#000" }} onClick={this.logout}>
                    로그아웃
                    </Link>
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup" style={{ color: "#000" }}>
                    회원가입
                  </Link>
                </Nav.Link>
                <Nav.Link href="/timesale">타임세일</Nav.Link>
                <Nav.Link>
                  <Link to="/mypage" style={{ color: "#000" }}>
                    마이페이지
                  </Link>
                </Nav.Link>
              </Router>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;