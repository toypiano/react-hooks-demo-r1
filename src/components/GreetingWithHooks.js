import React, { useState, useContext, useEffect } from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

export default function Greeting(props) {
  const [name, setName] = useState("Real");
  const [surname, setSurname] = useState("B");
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  useEffect(() => {
    document.title = name + " " + surname;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };
  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="From">{locale}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}
