import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faWallet,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMemberMenu, setShowMemberMenu] = useState(false);

  const handleMemberMenuHover = () => {
    setShowMemberMenu(true);
  };

  const handleMemberMenuLeave = () => {
    setShowMemberMenu(false);
  };
  return (
    <div className="Header">
      <header className="App-header">
        <h1>
          <Link
            style={{
              marginLeft: "25%",
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            WeBlockly
          </Link>
        </h1>

        <div className="search-box">
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            style={{ color: "white" }}
          />
          <input type="text" placeholder="Search..." />
        </div>

        <ul
          className="member-list"
          onMouseEnter={handleMemberMenuHover}
          onMouseLeave={handleMemberMenuLeave}
        >
          <div className="member-item">
            <FontAwesomeIcon
              icon={faWallet}
              size="1x"
              style={{ marginRight: "3px", marginTop: "8px" }}
            />
            <a href="#">connencting to wallet</a>
            {showMemberMenu && (
              <ul className="member-dropdown">
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    size="1x"
                    style={{
                      marginRight: "1px",
                      marginTop: "3px",
                      marginLeft: "5%",
                    }}
                  />
                  <Link to="/profile">會員profile</Link>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCog}
                    size="1x"
                    style={{
                      marginRight: "1px",
                      marginTop: "3px",
                      marginLeft: "5%",
                    }}
                  />
                  <Link to="/setting">設定</Link>
                </div>
              </ul>
            )}
            <div
              style={{
                color: "white",
                backgroundColor: "#322FCD",
                width: "40px",
                height: "30px",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Header;
