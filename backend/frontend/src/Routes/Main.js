import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Carousel
            style={{
              width: "70%",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.timeticket.co.kr/upload/happy_config/product_pick_img_big1.jpg?1568615417"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.timeticket.co.kr/upload/happy_config/product_pick_img_big5.jpg?1568772728"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.timeticket.co.kr/upload/happy_config/product_pick_img_big6.jpg?1536563279"
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            background: "#fff",
            position: "relative"
          }}
        >
          <div>
            <p className="main_title">티켓예매</p>
            <p className="main_subtitle">믿을만한 추천 티켓</p>
          </div>
          <div
            style={{
              marginTop: "20px",
              width: "990px",
              marginLeft: "200px"
            }}
          >
            <table width="150%" border="0" cellSpacing="0" cellPadding="10">
              <tbody>
                <tr>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      ></Card.Img>
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td valign="top" align="center">
                    <Card style={{ width: "14rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.timeticket.co.kr/wys2/file_attach_thumb/2019/02/11/1549847247-27-0_wonbon_N_7_310x420_90_3.jpg"
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          left: "0",
                          background: "#ff6858",
                          padding: "2px 6px",
                          color: "#fff",
                          font_weight: "400",
                          font_size: "12px",
                          margin_right: "3px"
                        }}
                      >
                        타임세일
                      </span>
                      <Card.Body>
                        <Card.Title
                          style={{
                            height: "22px",
                            margin_top: "10px",
                            margin_bottom: "3px",
                            font_size: "14px",
                            text_align: "left"
                          }}
                        >
                          <span
                            style={{
                              font_size: "12px",
                              color: "#777",
                              border: "1px solid #ccc",
                              padding: "0px 1px",
                              margin_right: "2px",
                              border_radius: "5px",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            대학로
                          </span>
                          <span
                            style={{
                              font_size: "14px",
                              color: "#313131",
                              font_weight: "400",
                              letter_spacing: "-0.5px"
                            }}
                          >
                            김종욱 찾기
                          </span>
                        </Card.Title>
                        <Card.Text
                          style={{
                            float: "left",
                            font_size: "14px",
                            color: "#777"
                          }}
                        >
                          10%
                        </Card.Text>
                        <Card.Text
                          style={{
                            float: "right",
                            font_size: "14px",
                            color: "#ed3d84",
                            font_weight: "500"
                          }}
                        >
                          11,000원
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .main_title {
            font-size: 32px;
            font-weight: bold;
            color: #4a4a4a;
          }
          .main_subtitle {
            font-size: 24px;
            color: #8b8b8b;
            padding-top: 5px;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}
export default Home;
