import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: 
      <input id="name" type="text" onChange={(e) => {setName(e.target.value)}} value={name} />
      </label>
      <label for="phone">Phone (11 digits): 
      <input id="phone" type="text" pattern="\d{11,11}" onChange={(e) => {setPhone(e.target.value)}} value={phone} />
      </label>
      <label for="email">Email: 
      <input id="email" type="text" onChange={(e) => {setEmail(e.target.value)}} value={email} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
    </>
  );
};

