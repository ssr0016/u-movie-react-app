import React, { Fragment, useState, useEffect } from "react";
import "./App.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);

  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false);
      return;
    }
    setIsTrue(true);
  };

  useEffect(() => {
    console.log("useEffect fired!");
    let people = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        dob: "1992-02-02",
      },
    ];
    setCrowd(people);
  }, []);

  return (
    <Fragment>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue && (
        <Fragment>
          <p>The current value of isTrue is True</p>
          <hr />
        </Fragment>
      )}
      <hr />
      {isTrue ? <p>is true</p> : <p>is false</p>}
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => (
          <li key={m.id} className="list-group-item">
            {m.firstName} {m.lastName} - {m.dob}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HelloWorld;
