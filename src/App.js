import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./api/spotify";
import { useDatalayerValue } from "./context/DataLayer";
import Spotify from "spotify-web-api-js";

function App() {
  const spotify = new Spotify();

  const [{ token, user }, dispatch] = useDatalayerValue();

  // spotify.setAccessToken(
  //   "BQBC4mCfvs6EhDWKOmlazYDA0F6FtAkciyu_fJWVyuuGl1Sl1Qr8wQdkuOAHShm-dewkb1-EThZqr3oJ2mXB7rYwqhpLQRr2b64e2pT-Ekc8o1tchbP1uxt1m8B3WrCOWnz8mcLj8HYADwWULSSnaTVfJz5x_jhNPAZ80hMdn8_DRH_Z3hx_I_fewna7R8pehg"
  // );

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    spotify.setAccessToken(_token);

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists(user?.id).then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
