import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
class Contact extends Component {
  state = {
    ShowContactInfo: false
  };
  onDeleteClick = async (id, dispatch) => {
    // this.setState({ showContactInfo: !this.state.showContactInfo });
    // this.props.deleteClickHandler();
    //    dispatch({ type: "DELETE_CONTACT", payload: id });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  // onShowClick = e => {
  //   // this.setState({ showContactInfo: !this.state.showContactInfo });
  //   // console.log(name);
  // };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { ShowContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      ShowContactInfo: !this.state.ShowContactInfo
                    })
                  }
                  class="fa fa-sort-down"
                  // aria-hidden="true"
                  style={{ cursor: "pointer" }}
                />{" "}
                <i
                  class="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  // aria-hidden="true"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              <table striped bordered hover size="sm">
                <tbody>
                  {ShowContactInfo ? (
                    <ul className="list-group">
                      <tr>
                        <li className="list-group-item">Email:{email}</li>
                      </tr>
                      <tr>
                        <li className="list-group-item">Phone:{phone}</li>
                      </tr>
                    </ul>
                  ) : null}
                </tbody>
              </table>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
};
export default Contact;
