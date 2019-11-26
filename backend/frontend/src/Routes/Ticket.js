import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { HashRouter as Link } from "react-router-dom";
import axios from "axios";
import {RouteComponentProps} from "react-router";

class Ticket extends React.Component {
  state = {
    boards:[]
  };

  async componentWillMount() {

 
    try{
      const res = await fetch("http://127.0.0.1:8000"+this.props.location.pathname, {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
      })
      const boards = await res.json();
      this.setState({boards})
      console.log(this.state.boards)
    }catch(e){
    }
  }


  render() {
      const a = this.props
    //   const Post = (props: RouteComponentProps<{postId: string}>)
    return (
      <Container
        style={{
          background: "#fff",
          width: "1200px",
          marginTop: "50px",
          height: "800px"
        }}
      >
          <div>
            {a.location.pathname}
          </div>
      </Container>
    );
  }
}

export default Ticket;
