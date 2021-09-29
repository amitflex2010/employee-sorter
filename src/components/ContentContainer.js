import React, { useState } from "react";
import ExpandableList from "./ExpandableList";
import ContactItem from "../pages/ContactItem/ContactItem";
const ContentContainer = ({ title, props }) => {
  const [closed, setCloseModal] = useState(false);

  return (
    <ExpandableList
      thumb={props.picture.thumbnail}
      title={title}
      isClosed={closed}
    >
      <ContactItem
        name={title}
        email={props.email}
        pic={props.picture.large}
        contact={props}
        onClose={() => {
          setCloseModal(!closed);
        }}
      />
    </ExpandableList>
  );
};

export default React.memo(ContentContainer);
