import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from "axios";

class MyPage extends React.Component {
  state = {
    email: "",
    name: "",
    phone: ""
  };

  componentWillMount() {
    axios
      .get("http://127.0.0.1:8000/auth/mypage/2/", {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
      })
      .then(res =>
        this.setState({
          email: res.data.email,
          name: res.data.name,
          phone: res.data.phone
        })
      )
      .catch(err => console.log(err));
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
    .put("http://127.0.0.1:8000/auth/mypage/2/", {
      email: this.state.email,
      name: this.state.name,
      password1: this.state.password1,
      password2: this.state.password2,
      phone: this.state.phone
    },{
      headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
    })
        .then(res => alert("수정되었습니다."),this.props.history.push("/mypage"))
        .catch(err => console.log(err));
    
  };
  render() {
    return (
      <Container
        style={{ background: "#fff", width: "500px", marginTop: "50px" }}
      >
        <h1>MyPage</h1>
        <Form onSubmit={this.handleSubmit} style={{ marginTop: "50px" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>별명</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>휴대폰번호</Form.Label>
            <Form.Control
              value={this.state.phone}
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            수정하기
          </Button>
        </Form>

        <br></br>
        <br></br>
      </Container>
    );
  }
}
export default MyPage;