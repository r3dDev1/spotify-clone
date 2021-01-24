const apiEndpoint = "https://accounts.spotify.com/authorize?";
const client_id = "dbe621dab5fa47f8aef411a983f09f58";
const redirect_uri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((prev, cur) => {
      let parts = cur.split("=");
      prev[parts[0]] = decodeURIComponent(parts[1]);

      return prev;
    }, {});
};

export const connectionUrl = `${apiEndpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
