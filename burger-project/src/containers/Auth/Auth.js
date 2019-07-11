import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buttons/Button";

import "./Auth.css";

class Auth extends Component {
  state = {
    formData: {
      email: this.inputParamsHandler("input", "You are name?", "text"),
      password: this.inputParamsHandler("input", "Password", "password", 6)
    },
    validForm: false,
    signIn: false,
    errorInfo: ""
  };

  componentDidMount() {
    if (this.props.token) {
      this.props.history.goBack();
    }
  }

  inputParamsHandler(elementType, placeholder, type, length) {
    let obj = {
      elementType,
      elementConfig: {
        placeholder,
        type
      },
      value: "",
      rules: {
        required: true
      },
      valid: false,
      info: ""
    };

    if (length) {
      obj.rules = {
        required: true,
        minhength: length
      };
    }

    return obj;
  }

  onChangeHandler(event, key) {
    const formData = { ...this.state.formData };
    formData[key].value = event.target.value.trim();

    this.setState({ formData });
    this.checkInputValidity(event.target.value, key);
  }

  checkInputValidity(vl, key) {
    let isValid = false;
    let value = vl.trim();
    const data = { ...this.state.formData };

    if (data[key].rules.required) {
      if (key === "email") {
        // eslint-disable-next-line no-useless-escape
        isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
        data[key].info = "";
        if (!isValid) {
          data[key].info =
            "Please enter a valid email address, for example email@gmail.com";
        }
      } else if (key === "password") {
        isValid = value.length >= 6 ? true : false;
        data[key].info = "";
        if (!isValid) {
          data[key].info =
            "Please enter a valid password, password should be more then 6 symbols";
        }
      }
    }
    data[key].valid = isValid;

    this.setState({ data });
    this.checkFormValidityHandler();
  }

  checkFormValidityHandler() {
    let isValidForm = true;
    for (const key in this.state.formData) {
      if (!isValidForm || !this.state.formData[key].valid) {
        isValidForm = false;
      }
    }
    this.setState({ validForm: isValidForm });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const data = {
      email: this.state.formData.email.value,
      password: this.state.formData.password.value,
      returnSecureToken: true
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDAXN_8gDzVQrMc4tutzrjcU8CcwokIS1E";

    if (this.state.signIn) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDAXN_8gDzVQrMc4tutzrjcU8CcwokIS1E";
    }

    axios
      .post(url, data)
      .then(response => {
        this.props.logUser(response.data.idToken, response.data.localId);
        localStorage.token = response.data.idToken;
        localStorage.userId = response.data.localId;

        this.props.history.push("/");
      })
      .catch(err => {
        switch (err.response.data.error.message) {
          case "INVALID_PASSWORD":
            this.setState({
              errorInfo: "Wrong password try again!"
            });
            break;
          case "EMAIL_EXISTS":
            this.setState({
              errorInfo:
                "Sorry, but this email already exists! We redirect you to the Sign In page!",
              signIn: true
            });
            break;
          case "EMAIL_NOT_FOUND":
            this.setState({
              errorInfo: "Invalid email address!"
            });

            break;
          case "TOO_MANY_ATTEMPTS_TRY_LATER":
            this.setState({
              errorInfo:
                "We have blocked all requests from this device due to unusual activity. Try again later.!"
            });
            break;

          default:
            break;
        }
      });
  }

  toggleMethods() {
    this.setState(prev => {
      return {
        signIn: !prev.signIn
      };
    });
  }

  render() {
    const form = [];
    const formData = { ...this.state.formData };

    for (const el in formData) {
      form.push(
        <Input
          key={el}
          label={this.state.formData[el].info}
          elementType={formData[el].elementType}
          isValid={this.state.formData[el].valid}
          value={this.state.formData[el].value}
          change={event => this.onChangeHandler(event, el)}
          elementConfig={formData[el].elementConfig}
        />
      );
    }

    const showError =
      this.state.errorInfo !== "" ? (
        <p className="Error-info">{this.state.errorInfo}</p>
      ) : null;

    return (
      <div className="Auth">
        <p className="Sign">
          {this.state.signIn ? "Loggin" : "Create new account"}
        </p>

        <form onSubmit={event => this.onSubmitHandler(event)}>
          {form}
          <Button btnType="Success" disabled={!this.state.validForm}>
            {" "}
            Submit{" "}
          </Button>
        </form>
        {showError}
        <Button btnType="Danger" clickedPurchase={() => this.toggleMethods()}>
          Switch to Sign {this.state.signIn ? "Up" : "In"}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logUser: (token, userId) =>
    dispatch({ type: "LOG_USER", data: { token, userId } })
});

const mapStateToProps = state => ({
  token: state.users.token
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
