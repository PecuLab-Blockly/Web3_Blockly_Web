import "./Header.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
          <Link style={{ marginLeft: "25%", color: "white",textDecoration: "none" }} to="/">WeBlockly</Link>
        </h1>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>


        <ul className="member-list" onMouseEnter={handleMemberMenuHover} onMouseLeave={handleMemberMenuLeave}>
          <div className="member-item" >
            <a href="#">connencting to wallet</a>
            {showMemberMenu && (
            <ul className="member-dropdown" >
              <div >
              <Link to="/profile">會員profile</Link>
              </div>
              <div>
              <Link to="/setting">設定</Link> 
              </div>
            </ul>)}
            <div style={{ color: "white",backgroundColor:'#322FCD',width:'40px',height:'30px',borderRadius:'50%' }}></div>
          </div> 
          
        </ul>

      </header>
    </div>
  );
}

export default Header;