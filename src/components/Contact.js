import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const rowStyle = {
  paddingTop: 10,
  paddingBottom: 10,
};

const containerStyle = {
  paddingTop: 10,
  paddingBottom: 50,
};

export const Contact = () => (
  <div className="d-grid gap-5">
    {/* <Container>
      <Row>
        <span as={Col}>Address</span>
        <span as={Col}>소주도 독하군 마시면 뽕가리 1004번지</span>
      </Row>
    </Container> */}
    <Container style={containerStyle}>
      <Row style={rowStyle}>
        <Col sm={2}>주소</Col>
        <Col sm={10}>소주도 독하군 마시면 뽕가리 1004번지</Col>
      </Row>
      <Row style={rowStyle}>
        <Col sm={2}>고객센터</Col>
        <Col sm={10}>010-1234-5678</Col>
      </Row>
      <Row style={rowStyle}>
        <Col sm={2}>이메일</Col>
        <Col sm={10}>dongnesosik@gmail.com</Col>
      </Row>
    </Container>
    {/* <div>
    <div class="page-section">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-pin"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Address</p>
            <p class="mb-0 text-secondary">
              소주도 독하군 마시면 뽕가리 1004번지
            </p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-call"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Phone</p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                +12 3456 7890
              </a>
            </p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-mail"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Email Address</p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                dongnesosik@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div> */}
    <div>
      <Container style={containerStyle}>
        <h2 style={{ paddingBottom: 30 }}>문의하기</h2>
        <Form>
          <Row>
            <Form.Group as={Row} className="mb-3" controlId="formBasicName">
              <Form.Label column sm={2}>
                성명
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="성명을 입력하세요." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={2}>
                이메일
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="이메일을 입력하세요." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicSubject">
              <Form.Label column sm={2}>
                제목
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="제목을 입력하세요." />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label column sm={2}>
                내용
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="내용을 입력하세요."
                />
              </Col>
            </Form.Group>

            <Button className="" variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  </div>
);
