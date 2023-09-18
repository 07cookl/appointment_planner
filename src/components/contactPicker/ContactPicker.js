import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  let contactList = contacts.map(contact => contact.name);
  return (
    <>
    <select name="contact" id="contact" onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contactList.map((contactName) => (
        <option key={contactList.indexOf(contactName)} value={contactName}>{contactName}</option>
      ))}
    </select>
    </>
  );
};
