import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./App.css";

function App() {
  const options = [
    { label: "California", value: "CA" },
    { label: "Texas", value: "TX" },
    { label: "Washington", value: "WA" },
    { label: "Florida", value: "FL" },
    { label: "Virginia", value: "VA" },
    { label: "Georgia", value: "GA" },
    { label: "Michigan", value: "MI" },
  ];

  return (
    <>
      <Select
        defaultValue={[options[2], options[3]]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  );
}

export default App;
