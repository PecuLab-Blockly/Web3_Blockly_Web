import "./Home.scss";
import { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header";
import WorkSquare from "../../components/WorkSquare";
import useMouseY from "../../utils/useMouseY";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const mouseY = useMouseY();

  const handleMouseEnter = useCallback(() => {
    setShowArrow(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowArrow(false);
  }, []);
  const handleArrowClick = useCallback(() => {
    if (currentWorkIndex === 2) {
      setCurrentWorkIndex(0);
    } else {
      setCurrentWorkIndex(currentWorkIndex + 1);
    }
  }, [currentWorkIndex]);
  return (
    <div>
      <Header></Header>
      <div className="home_container">
        <div className="home_column one">
          <div className="home_column_one_left">
            <div className="title">
              <div className="title_square_one">
                <div style={{ marginLeft: "6%", width: "18%" }} className="h2">
                  最近的設計
                </div>
              </div>
            </div>
            {/* 滑鼠hover作品區域會顯現向右按鈕 */}
            <div
              className="work_display"
              id="NextButton"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {showArrow && (
                <div className="arrow_circle top">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="1x"
                    style={{ marginRight: "2px", color: "white" }}
                  />
                </div>
              )}
              <WorkSquare></WorkSquare>
              <WorkSquare></WorkSquare>
              <WorkSquare></WorkSquare>
            </div>
          </div>
          <div className="home_column_one_right">
            <button className="button red">
              <FontAwesomeIcon
                icon={faPencilAlt}
                size="1x"
                style={{ marginRight: "8px" }}
              />
              <Link to="/createWork">快速建立blockly</Link>
            </button>

            <button className="button yellow">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="1x"
                style={{ marginRight: "8px" }}
              />
              快速發行NFT
            </button>
          </div>
        </div>
        <div className="home_column two">
          <div className="title">
            <div className="title_square">
              <div style={{ marginLeft: "4%", width: "10%" }} className="h2">
                熱門項目
              </div>
            </div>
          </div>
          <div
            className="work_display"
            id="NextButton"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showArrow && (
              <div className="arrow_circle below">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="1x"
                  style={{ marginRight: "2px", color: "white" }}
                />
              </div>
            )}
            <WorkSquare></WorkSquare>
            <WorkSquare></WorkSquare>
            <WorkSquare></WorkSquare>
            <WorkSquare></WorkSquare>
            <WorkSquare></WorkSquare>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
