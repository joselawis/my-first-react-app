import React, { Component } from "react";
import Popup from "react-popup";
import "./Person.css";

class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errors: {
        firstName: false,
        lastName: false,
      },
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    // El método e.preventDefault() cancela el evento si este es cancelable, por lo ue la acción predeterminada que pertenece al evento, no se producirá.
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state;

    this.setState({
      errors: {
        firstName: firstName === "",
        lastName: lastName === "",
      },
    });

    if (firstName !== "" && lastName !== "" && email !== "") {
      Popup.create({
        title: "Personal Information",
        content: (
          <div>
            <p>
              <strong>Name:</strong> {firstName} {lastName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            {phone && (
              <p>
                <strong>Phone:</strong> {phone}
              </p>
            )}
          </div>
        ),
        buttons: {
          right: [
            {
              text: "Close",
              action: (popup) => popup.close(),
            },
          ],
        },
      });
    }
  };

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <p>
              <strong>Name:</strong>
            </p>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleOnChange}
              className={this.state.errors.firstName ? "error" : ""}
            />
            {this.state.errors.firstName && (
              <div className="errorMessage">Campo obligatorio</div>
            )}
          </div>
          <div>
            <p>
              <strong>Last Name:</strong>
            </p>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleOnChange}
              className={this.state.errors.lastName ? "error" : ""}
            />
            {this.state.errors.lastName && (
              <div className="errorMessage">Campo obligatorio</div>
            )}
          </div>
          <div>
            <p>
              <strong>Email:</strong>
            </p>
            <p>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </p>
          </div>
          <div>
            <p>
              <strong>Phone:</strong>
            </p>
            <p>
              <input
                name="phone"
                type="tel"
                value={this.state.phone}
                onChange={this.handleOnChange}
              />
            </p>
          </div>
          <p>
            <button>Save Information</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Person;
