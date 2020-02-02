import React, { useState } from "react";
import Row from "./Row";

export default function Greeting(props) {
  const [name, setName] = useState("Real");
  const [surname, setSurname] = useState("B");

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };
  return (
    <section>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
    </section>
  );
}
