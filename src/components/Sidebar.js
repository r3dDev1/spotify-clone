import React from "react";
import "../styles/Sidebar.css";
import { AiFillHome, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { MdLibraryAdd } from "react-icons/md";
import { useDatalayerValue } from "../context/DataLayer";

function Sidebar() {
  const [{ playlists }] = useDatalayerValue();

  console.log(playlists);
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <a href="#">
          <img src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">
                <AiFillHome /> Home
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineSearch /> Search
              </a>
            </li>
            <li>
              <a href="#">
                <VscLibrary /> Your Library
              </a>
            </li>
          </ul>
        </nav>
        <div className="playlists">
          <h3>Playlists</h3>
          <div className="playlists__items">
            <button className="playlists__item">
              <span>
                <MdLibraryAdd />
              </span>
              Create Playlist
            </button>
            <button className="playlists__item">
              <span>
                <AiFillHeart />
              </span>
              Liked Songs
            </button>
          </div>
        </div>
        <hr className="hr__line" />
        <div className="user__playlists">
          {playlists?.items?.map((p) => (
            <p>{p.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
