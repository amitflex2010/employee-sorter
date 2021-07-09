import React from "react";
import "./ContactItem.css";

const ContactItem = ({ name, email, pic, contact, onClose }) => (
  
  <div className="card">
  <div className="header">
  <p className="cross" onClick={onClose}>&#x2716;</p>
  <div className="avatar-container">
      <div className="photo">
        <img alt="avatarImg" className="img" src={pic} />
      </div>
    </div>
  </div>
  <div className="row">
  <h2 className="h2color">{name}</h2>
    <div className="details-container">
      <div className="content">
        <p><span className="boldtext">email:</span> {email}</p>
        <p><span className="boldtext">phone:</span> {contact.cell}</p>
        <p><span className="boldtext">street:</span> <span>{contact.location.street.number} {contact.location.street.name}</span></p>
        <p><span className="boldtext">city:</span> {contact.location.city}</p>
        <p><span className="boldtext">state:</span> {contact.location.state}</p>
        <p><span className="boldtext">pincode:</span> {contact.location.postcode}</p>
      </div>
    </div>
  </div>
</div>
);

export default ContactItem;
