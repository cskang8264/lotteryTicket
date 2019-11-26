import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { HashRouter as Link } from "react-router-dom";
import axios from "axios";
import {RouteComponentProps} from "react-router";

class BoardDetail extends React.Component {
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
         <section>
           <div style={{height:"37px", marginBottom: "10px",paddingTop: "10px"}}>
             <h2>
               <a style={{color:"#3c4790"}}>
                 {this.state.boards.title}
               </a>
             </h2>
           </div>
         </section>
         <article>
           <div style={{position: "relative", borderTop: "2px solid #3c4790", paddingBottom: "37px",zIndex: 13}}>
            <header>
              {this.state.boards.title}
            </header>
            <div style={{margin: "16px 0 29px",paddingBottom: "11px",borderBottom: "1px solid #eee",backgroundColor: "white"}}>
              <span>{/* {this.state.boards.user.email} */}</span>
              <span>{this.state.boards.created_at}</span>
            </div>
           </div>
           <div>
             {this.state.boards.content}
           </div>
         </article>
         <div>
           {/* {this.state.boards.comments} */}
         </div>
      </Container>
    );
  }
}

export default BoardDetail;
