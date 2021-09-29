import React, { useState, useRef, useMemo, useCallback } from "react";
import Chevron from "./Chevron";

import "./ExpandableList.css";

const ExpandableList = ({ thumb, title, isClosed, children }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("expandableList__icon");
  const content = useRef(null);

  useMemo(() => closeBlock(), [isClosed]);

  function closeBlock() {
    setActiveState("");
    setHeightState("0px");
    setRotateState("expandableList__icon");
  }

  const toggleExpandableList = useCallback(() => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active"
        ? "expandableList__icon"
        : "expandableList__icon rotate"
    );
  },[setActive]);

  return (
    <div className="expandableList__section">
      <button
        className={`expandableList ${setActive}`}
        onClick={toggleExpandableList}
      >
        <div className="container-img">
          <img alt="avatarImg" className="img1" src={thumb} />
          <p className="expandableList__title">{title}</p>
          <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        </div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="expandableList__content"
      >
        <div className="expandableList__text">{children}</div>
      </div>
    </div>
  );
};

export default ExpandableList;
