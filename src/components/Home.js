import React from "react";
import { Button, Card } from "react-bootstrap";
import { ReactComponent as BannerImage } from "../assets/img/banner_image_1.svg";

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
            <h1 class="mb-4">동내 소식!</h1>
            <p class="text-lg text-grey mb-5">
              주변에 사는 이웃에게 동내 소식을 실시간으로 확인하세요!
            </p>
          </div>

          <div class="col-md-6 py-5 wow zoomIn">
            <div class="img-fluid text-center">
              <BannerImage />
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
              <Card.Title>Memil</Card.Title>
              <Card.Text>서버 개발 잘해요.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
              <Card.Title>Junddao</Card.Title>
              <Card.Text>앱 개발 잘해요!</Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
              <Card.Title>You</Card.Title>
              <Card.Text>잘 할꺼에요.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
