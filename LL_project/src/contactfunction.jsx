import React, { useState } from "react";

export default function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (name.trim() === "" || phone.trim() === "") return;

    setContacts([...contacts, { id: Date.now(), name, phone, visible: false }]);
    setName("");
    setPhone("");
  };

  