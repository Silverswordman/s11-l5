import React from "react";
import { Card } from "react-bootstrap";

const CardAlbum = ({ songInfo }) => {
  return (
    <div className="col text-center" id={songInfo.id}>
      <Card>
        <Card.Img
          variant="top"
          src={songInfo.album.cover_medium}
          alt="track"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>
            Track: "
            {songInfo.title.length < 16
              ? `${songInfo.title}`
              : `${songInfo.title.substring(0, 16)}...`}
            "
          </Card.Title>
          <Card.Text>Artist: {songInfo.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAlbum;
