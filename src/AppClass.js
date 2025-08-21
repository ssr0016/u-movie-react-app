import React, { Component, Fragment } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef(null);
    this.firstNameRef = React.createRef();
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({ isTrue: false });
      return;
    }
    this.setState({ isTrue: true });
  };

  setFirstName(newName) {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.firstName, this.state.lastName, this.state.dob);

    if (this.state.firstName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
  };

  addPerson(newFirst, newLast, newDob) {
    // create the object
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDob,
    };

    const newList = this.state.crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    this.setState({ crowd: sorted });
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
    });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  }

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",

      crowd: [
        { id: 1, firstName: "John", lastName: "Doe", dob: "1990-01-01" },
        { id: 2, firstName: "Jane", lastName: "Doe", dob: "1992-02-02" },
      ],
    });
  }

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <Fragment>
            <p>The current value of isTrue is True</p>
            <hr />
          </Fragment>
        )}
        <hr />
        {this.state.isTrue ? <p>is true</p> : <p>is false</p>}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>

        <hr />

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) => this.setFirstName(event.target.value)}
            />
          </div>

          <Input
            name="last-name"
            title="Last Name"
            ref={this.lastNameRef}
            type="text"
            className="form-control"
            autoComplete="last-name-new"
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />

          <Input
            name="dob"
            title="Date of Birth"
            ref={this.dobRef}
            type="date"
            className="form-control"
            autoComplete="dob-new"
            onChange={(event) => this.setState({ dob: event.target.value })}
          />

          <input type="submit" value="Submit" className="btn btn-primary" />
          <hr />
        </form>

        <div>
          First Name: {this.state.firstName}
          <br />
          Last Name: {this.state.lastName}
          <br />
          DOB: {this.state.dob}
          <br />
        </div>

        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((m) => (
            <li key={m.id} className="list-group-item">
              {m.firstName} {m.lastName} - {m.dob}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
