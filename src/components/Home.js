import React from "react";
import { Card } from "react-bootstrap";
import camping_home from "../assets/img/camping_home.png";

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>;

export const Home = () => (
  <div class="page-section">
    <div class="container">
      <div class="page-banner home-banner">
        <div class="row align-items-center flex-wrap-reverse h-100">
          <div class="col-md-6 py-5 wow fadeInLeft">
            <h1 class="mb-4">니가가라 캠핑!</h1>
            <p class="text-lg text-grey mb-5">
              캠핑장 거래를 보다 쉽고, 빠르게!
            </p>
          </div>

          <div class="col-md-6 py-5 wow zoomIn">
            <div class="img-fluid text-center">
              <img src={camping_home} alt="camping_home" width="400" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://t1.daumcdn.net/cfile/blog/157F213F4E2E25EF29?original"
              width="286"
              height="180"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>쉽게</Card.Title>
              <Card.Text>불편한 거래는 이제 그만</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://t1.daumcdn.net/cfile/blog/197F983F4E2E25F020?original"
              width="286"
              height="180"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>빠르게</Card.Title>
              <Card.Text>채팅으로 빠르게</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://t1.daumcdn.net/cfile/blog/1605503F4E2E25F221?original"
              width="286"
              height="180"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>안전하게</Card.Title>
              <Card.Text>거래 이력 확인으로 안전하게</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
