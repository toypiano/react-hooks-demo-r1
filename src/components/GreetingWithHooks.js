import React, { useState, useContext, useEffect } from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

export default function Greeting(props) {
  const name = useFormInput("Real");
  const surname = useFormInput("B");
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(name.value + " " + surname.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="From">{locale}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}
