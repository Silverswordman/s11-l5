import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const SearchResults = () => {
  let results = useSelector((state) => state.search.searchValue);
  return results.map((song) => {
    <Card>
      <Card.Img
        variant="top"
        src={song.album.cover_medium}
        alt="track"
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>
          Track: "
          {song.title.length < 16
            ? `${song.title}`
            : `${song.title.substring(0, 16)}...`}
          "
        </Card.Title>
        <Card.Text>Artist: {song.artist.name}</Card.Text>
      </Card.Body>
    </Card>;
  });
};
export default SearchResults;
