import React from "react";
import { connectionUrl } from "../api/spotify";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <a href={connectionUrl}>Login</a>
    </div>
  );
}

export default Login;
