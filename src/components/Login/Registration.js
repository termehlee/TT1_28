import { useState } from "react";
import Card from './Card';
import classes from './Login.module.css';
import Button from './Button';

function Registration() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPostal, setInputInputPostal] = useState("");
  const [inputGender, setInputInputGender] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      inputUsername,
      inputPassword,
      inputName,
      inputPostal,
      inputGender
    );
  };

  const usernameHandler = (event) => {
    setInputUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const nameHandler = (event) => {
    setInputName(event.target.value);
  };

  const postalHandler = (event) => {
    setInputInputPostal(event.target.value);
  };
  const genderHandler = (event) => {
    setInputInputGender(event.target.value);
  };

  return (
    <div>
      <Card className={classes.register}>
        <h3>Sign up for a new account</h3>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={usernameHandler}
                value={inputUsername}
              />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={passwordHandler}
                value={inputPassword}
              />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              <p>First Name</p>
              <input type="text" onChange={nameHandler} value={inputName} />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              <p>Postal Code</p>
              <input type="text" onChange={postalHandler} value={inputPostal} />
            </label>
          </div>

          <div className={classes.control}>
            <label>
              <p>Gender</p>
              <input type="text" onChange={genderHandler} value={inputGender} />
            </label>
          </div>
          <div>
            <Button className={classes.btn} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Registration;
