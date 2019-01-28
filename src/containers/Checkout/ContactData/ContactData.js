import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postcode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Luke",
        address: {
          street: "1 test Rd",
          suburb: "Test",
          postcode: "1000"
        },
        email: "test@example.com",
        deliverMethod: "fast"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={styles.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={styles.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={styles.Input}
          type="text"
          name="postcode"
          placeholder="Your Postcode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          OREDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
