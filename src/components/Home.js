import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BannerImage } from "../assets/img/banner_image_1.svg";
// import Cookie from "../assets/img/banner_image_1.svg";

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
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-1.svg" alt="" />
            </div>
            <div class="body">
              <h5 class="text-secondary">Memil</h5>
              <p>서버 개발 잘해요!</p>
              <Link to="/services" class="btn btn-primary">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-2.svg" alt="" />
            </div>
            <div class="body">
              <h5 class="text-secondary">Junddao</h5>
              <p>앱 개발 잘해요!</p>
              <Link to="/services" class="btn btn-primary">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-3.svg" alt="" />
            </div>
            <div class="body">
              <h5 class="text-secondary">오일남</h5>
              <p>깐부</p>
              <Link to="/services" class="btn btn-primary">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
