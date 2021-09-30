import React, { useEffect, useState } from 'react';
import Card from './Card';
import classes from './Login.module.css';
import Button from './Button';
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../services/server.js";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      console.log(history, "history")
      history.replace("/products");
    }
  }, [user, loading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const token = await loginUser({
    //   enteredEmail,
    //   enteredPassword
    // });
    // setToken(token)
    console.log(enteredEmail, enteredPassword);
    window.location.href = "http://localhost:3000/products";
  };

  const handleRegistration = () => {
    history.replace("/registration")
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleSubmit}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            placeholder="<abc.gmail.com>"
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            placeholder="<Password must be at least 6 characters>"
          />
        </div>

        <div className={classes.actions}>
        <Button type="button" className={classes.btn} onClick={handleRegistration}>
            Sign up
          </Button>

          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
            onClick={() => signInWithEmailAndPassword(enteredEmail, enteredPassword)}>
            Login
          </Button>

          <Button className={classes.btn} onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
