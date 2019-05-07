import React, { Component } from "react";
import PropTypes from "prop-types";

import Contact from "./Contact.js";

class RenderCont extends Component {
  render() {
    const { contacts } = this.props;

    const listi = contacts.map(temp => {
      return (
        <Contact
          key={temp.id}
          name={temp.name}
          email={temp.email}
          phone={temp.phoneNo}
        />
      );
    });

    return <div>{listi}</div>;
  }
}

export default RenderCont;
