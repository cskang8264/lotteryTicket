import React from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import {BootstrapTable,TableHeaderColumn}from "react-bootstrap-table"
import Container from "react-bootstrap/Container";
import { HashRouter as Link } from "react-router-dom";
import axios from "axios";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

class Board extends React.Component {
  state = {
    boards: []
  };

  async componentWillMount() {
 
    try{
      const res = await fetch("http://127.0.0.1:8000/board/posts/", {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
      })
      const boards = await res.json();
      this.setState({boards})
      console.log(this.state.boards)
    }catch(e){
    }
  }


  render() {
    const {boards} =this.state.boards;
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
          {boards}
        </div>
        <BootstrapTable data={boards}>
          <TableHeaderColumn isKey dataField="id">
            title
          </TableHeaderColumn>
          <TableHeaderColumn dataField="content">
            content
          </TableHeaderColumn>
          <TableHeaderColumn>
            title
          </TableHeaderColumn>
        </BootstrapTable>
        <Button
          style={{
            text_align: "center",
            position: "absolute",
            left: "900px",
            marginTop: "8px"
          }}
          href="#/text"
        >
          글쓰기
        </Button>
        <br />
        <br />
        <Table striped>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>

          <tbody>
          </tbody>
        </Table>

        <div
          style={{
            position: "absolute",
            left: "1350px"
          }}
        ></div>
        <Pagination size="sm">{items}</Pagination>
      </Container>
    );
  }
}

export default Board;
