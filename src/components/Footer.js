import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const footerStyle = {
  background: " rgba(0, 0, 0, 0.2)",
};
export const Footer = () => {
  return (
    <div>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <Button variant="dark">
              <Icon.Facebook />
            </Button>
            <Button variant="dark">
              <Icon.Twitter />
            </Button>
            <Button variant="dark">
              <Icon.Google />
            </Button>
            <Button variant="dark">
              <Icon.Instagram />
            </Button>

            <Button variant="dark">
              <Icon.Github />
            </Button>
          </section>
        </div>

        <div class="text-center p-3" style={footerStyle}>
          © Dongnesosik Corp. All rights reserved :
          <a class="text-white" href="https://dongnesosik.co.kr">
            dongnesosik.co.kr
          </a>
        </div>
      </footer>
    </div>
  );
};
