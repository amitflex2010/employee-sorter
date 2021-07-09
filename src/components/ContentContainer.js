import React, { useState } from "react";
import ExpandableList from "./ExpandableList";
import ContactItem from "../pages/ContactItem/ContactItem";
const ContentContainer = ({ title, props }) => {
  const [closed, setCloseModal] = useState(false);
  function onCloseClick(evt) {
    setCloseModal(!closed);
    console.log(closed)
  }
  return (
    <ExpandableList title={title} isClosed={closed}>
      <ContactItem
        name={title}
        email={props.email}
        pic={props.picture.large}
        contact={props}
        onClose={onCloseClick}
      />
    </ExpandableList>
  );
};

export default ContentContainer;
