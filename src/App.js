import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Input from "./Input";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, dob);

    if (lastName !== "") {
      addPerson(firstName, lastName, dob);
    }
  };

  const addPerson = (newFirst, newLast, newDob) => {
    // create the object
    let newPerson = {
      id: crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDob,
    };

    const newList = crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    setCrowd(sorted);
    setFirstName("");
    setLastName("");
    setDob("");
  };

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

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="first-name-new"
            className="form-control"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <Input
          name="last-name"
          title="Last Name"
          type="text"
          className="form-control"
          autoComplete="last-name-new"
          onChange={(event) => setLastName(event.target.value)}
        />

        <Input
          name="dob"
          title="Date of Birth"
          type="date"
          className="form-control"
          autoComplete="dob-new"
          onChange={(event) => setDob(event.target.value)}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
        <hr />
      </form>

      <div>
        First Name: {firstName}
        <br />
        Last Name: {lastName}
        <br />
        DOB: {dob}
        <br />
      </div>

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
