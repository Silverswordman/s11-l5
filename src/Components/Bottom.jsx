import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Shuffle from "../Assets/playerbuttons/shuffle.png";
import Prev from "../Assets/playerbuttons/prev.png";
import Play from "../Assets/playerbuttons/play.png";
import Next from "../Assets/playerbuttons/next.png";
import Repeat from "../Assets/playerbuttons/repeat.png";

const BottomNavbar = () => {
  const styleButton = {
    width: "20px",
  };
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col md={4} className="col-6 playerControls">
              <div className="d-flex justify-content-between ">
                <div href="#">
                  <img
                    src={Shuffle}
                    alt="shuffle"
                    style={styleButton}
                    className="opacity-75"
                  />
                </div>
                <div href="#">
                  <img
                    src={Prev}
                    alt="prev"
                    style={styleButton}
                    className="opacity-75"
                  />
                </div>
                <div href="#">
                  <img
                    src={Play}
                    alt="play"
                    style={styleButton}
                    className="opacity-75"
                  />
                </div>
                <div href="#">
                  <img
                    src={Next}
                    alt="next"
                    style={styleButton}
                    className="opacity-75"
                  />
                </div>
                <div href="#">
                  <img
                    src={Repeat}
                    alt="repeat"
                    style={styleButton}
                    className="opacity-75"
                  />
                </div>
              </div>
              <div className="progress mt-3 opacity-75">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNavbar;
