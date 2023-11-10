import CardAlbum from "../../Components/CardAlbum";

const fetchRockSuccess = (data) => ({
  type: "FETCH_ROCK_SUCCESS",
  payload: data,
});

const fetchPopSuccess = (data) => ({
  type: "FETCH_POP_SUCCESS",
  payload: data,
});

const fetchHipHopSuccess = (data) => ({
  type: "FETCH_HIPHOP_SUCCESS",
  payload: data,
});

export const SetSearch = "SET_SEARCH";

export const handleSection = (genre) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + genre,
        {
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );

      if (response.ok) {
        let responseData = await response.json();
        let Arraydata = responseData.data;

        switch (genre) {
          case "rock":
            dispatch(
              fetchRockSuccess(
                Arraydata.slice(0, 4).map((songInfo) => CardAlbum(songInfo))
              )
            );
            break;
          case "pop":
            dispatch(
              fetchPopSuccess(
                Arraydata.slice(0, 4).map((songInfo) => CardAlbum(songInfo))
              )
            );
            break;
          case "hiphop":
            dispatch(
              fetchHipHopSuccess(
                Arraydata.slice(0, 4).map((songInfo) => CardAlbum(songInfo))
              )
            );
            break;
          default:
            break;
        }
      } else {
        console.log(`Error in fetching ${genre} songs`);
      }
    } catch (error) {
      console.log(`Error in fetching ${genre} songs`, error);
    }
  };
};



const searching = (searchValue) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          searchValue,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let result = await response.json();
        console.log(result.data);
        dispatch({
          type: SetSearch,
          payload: result.data,
        });
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export default searching;
