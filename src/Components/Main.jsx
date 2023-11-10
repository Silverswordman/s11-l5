import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardAlbum from "./CardAlbum";
import { useDispatch, useSelector } from "react-redux";

const MainContent = () => {
  const dispatch = useDispatch();
  const rockSongs = useSelector((state) => state.rockSongs);
  const popSongs = useSelector((state) => state.popSongs);
  const hiphopSongs = useSelector((state) => state.hiphopSongs);

  return (
    <Container fluid className="mainPage">
      <Row>
        <Col md={9} className="offset-md-3">
          <Row>
            <Col md={9} lg={11} className="mainLinks d-none d-md-flex">
              <p href="#" className="text-white-50" id={"trend"}>
                TRENDING
              </p>
              <p href="#" className="text-white-50" id={"podcast"}>
                PODCAST
              </p>
              <p href="#" className="text-white-50" id={"mood"}>
                MOODS AND GENRES
              </p>
              <p href="#" className="text-white-50" id={"new"}>
                NEW RELEASES
              </p>
              <p href="#" className="text-white-50" id={"discover"}>
                DISCOVER
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <div id="searchResults" style={{ display: "none" }}>
                <h2>Search Results</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  {rockSongs.rockSongs.map((songInfo) => (
                    <CardAlbum key={songInfo.id} songInfo={songInfo} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                  {popSongs.popSongs.map((songInfo) => (
                    <CardAlbum key={songInfo.id} songInfo={songInfo} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hiphopSection"
                >
                  {hiphopSongs.hiphopSongs.map((songInfo) => (
                    <CardAlbum key={songInfo.id} songInfo={songInfo} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
