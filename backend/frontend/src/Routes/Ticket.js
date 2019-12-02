import React from "react";
import { Button,Toast } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { HashRouter as Link } from "react-router-dom";
import axios from "axios";
import {RouteComponentProps} from "react-router";
 

  function onClickPayment() {
    console.log("pay2")
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp90491223');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'kakaopay',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}` ,  // 주문번호
      amount: 1000,                                 // 결제금액
      name: '김종욱찾기',                  // 주문명
      buyer_name: '홍길동',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
      buyer_addr: '신사동 661-16',                    // 구매자 주소
      buyer_postcode: '06018',                      // 구매자 우편번호
      
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
      
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

class Ticket extends React.Component {
  
  state = {
    tickets:[],
    jbSplit:[]
  };

  async componentWillMount() {

 
    try{
      const res = await fetch("http://127.0.0.1:8000"+this.props.location.pathname, {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` }
      })
      const tickets = await res.json();
      this.setState({tickets})

      var jbReplace = tickets.detail_src.replace('[',"").replace(/'/gi,'').replace(']',"").replace(' ','');
      var jbSplit = jbReplace.split(',');
      this.setState({jbSplit})
      console.log(this.state.jbSplit)
      console.log(this.state.tickets)
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
        <div
          style={{ width: "100%", background: "#f4f4f4", marginTop: "50px" }}
        >
          <div style={{ width: "100%", background: "#f4f4f4" }}>
            <div
              style={{ paddingTop: "20px", width: "820px", margin: "0 auto" }}
            >
              <div
                style={{
                  float: "left",
                  position: "relative",
                  width: "500px",
                  height: "345px",
                  marginRight: "15px",
                  background: "#fff",
                  outline: "1px solid, #eee"
                }}
              >
                <img src={"https://timeticket.co.kr/"+this.state.tickets.img_src} style={{width:"100%",height:"93%"}}></img>
              </div>
              <div style={{ float: "right", width: "305px" }}>
                <div
                  style={{
                    background: "#fff",
                    padding: "0 10px",
                    outline: "1px solid #eee"
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px 0 10px 0",
                      wordWrap: "break-word",
                      wordBreak: "keep-all"
                    }}
                  >
                    <span
                      style={{
                        border: "1px solid #ddd",
                        padding: "2px 3px",
                        fontSize: "13px",
                        color: "#777",
                        borderRadius: "7px",
                        verticalAlign: "2px"
                      }}
                    >
                      {this.state.tickets.area}
                    </span>
                    <span
                      style={{
                        marginLeft: "2px",
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#000"
                      }}
                    >
                      {this.state.tickets.title}
                    </span>
                  </div>
                  <div
                    style={{ textAlign: "center", padding: "0px 5px 15px 5px" }}
                  >
                    <div
                      style={{
                        borderTop: "1px solid #eee",
                        padding: "15px 0 5px 0",
                        overflow: "hidden",
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#8b8b8b"
                      }}
                    >
                      <div style={{ float: "left" }}>
                        <strike>45,000원</strike>
                      </div>
                      <div style={{ float: "right", paddingRight: "10px" }}>
                        평일 1인 타임세일 기준
                      </div>
                    </div>

                    <div
                      style={{
                        overflow: "hidden",
                        fontSize: "18px",
                        color: "#ed1c24",
                        fontWeight: "400"
                      }}
                    >
                      <div style={{ float: "left" }}>
                        최대 {this.state.tickets.sale}<span style={{ fontSize: "14px" }}>%</span> 할인
                      </div>
                      <div style={{ float: "right" }}>{this.state.tickets.price}~</div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    position: "relative",
                    top: "0",
                    left: "0",
                    textAlign: "center"
                  }}
                >
                  <div
                    style={{ textAlign: "center", paddingTop: "10px" }}
                  ></div>
                  <Button onClick={onClickPayment} style={{ background: "#FF3399", width: "100%" }}>
                    구매하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "100px",
              fontSize: "18px",
              fontWeight: "500",
              color: "#000",
              verticalAlign: "middle"
            }}
          >
            예매자
            <span style={{ color: "#f00", fontWeight: "500" }}> 별점 4.7</span>
            <span style={{ color: "#555", fontSize: "13px" }}>
              {" "}
              / 5.0 (총 264명)
            </span>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid #eee",
              marginTop: "10%"
            }}
          >
          </div>
        </div>
      </div>
      <div style={{
      border:" 1px solid #eee",
      borderTop: "none",
      padding:" 30px 59px",
      background:" #fff",
      fontSize:" 13px",
      color: "#313131",
      lineHeight: "1.8em",
      letterSpacing:" -0.5px"
      }}>
        <div style={{
        fontFamily: "Nanum Gothic",
        fontSize: "20px",
        fontWeight: "300",
        color: "#000",
        lineHeight: "1.8em"}}>
          {this.state.tickets.detail_guide}
        </div>
               {this.state.jbSplit ? this.state.jbSplit.map(photo =>{
        return (
          <div style={{
            marginTop: "0px",
            width: "700px",
            textAlign: "center"}}>
          <img style={{maxWidth: "100%", width: "700px", marginLeft:"20%"}} src={photo}></img>
          </div>
          )
        }):""}
        
      </div>
      </Container>
    );
  }
}

export default Ticket;