import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [day, month, year] = new Date()
    .toLocaleDateString("en-GB")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleChange = (e) => {
    setContact(e.target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: 
      <input id="name" type="text" onChange={(e) => {setName(e.target.value)}} value={name} />
      </label>
      <label for="date">Date: 
      <input id="date" type="text" min={getTodayString()} onChange={(e) => {setDate(e.target.value)}} value={date} />
      </label>
      <label for="time">Time: 
      <input id="time" type="text" onChange={(e) => {setTime(e.target.value)}} value={time} />
      </label>
      <label for="contact">Choose a contact:
      <ContactPicker contacts={contacts} onChange={handleChange} />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
    </>
  );
};
