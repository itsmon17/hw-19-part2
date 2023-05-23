import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/authSlice";

const LoginForm = () => {
  const [inputOnBlur, setInputOnBlur] = useState(false);
  const dispatch = useDispatch();
  const { isFormValid, email, password } = useSelector(
    (state) => state.loginForm
  );
  console.log(isFormValid);
  console.log(email, password);

  const emailChangeHandler = (e) => {
    const emailValue = e.target.value;
    dispatch(authActions.emailValidate(emailValue));
  };

  const passwordChangeHandler = (e) => {
    const passwordValue = e.target.value;
    dispatch(authActions.passwordValidate(passwordValue));
  };

  const loginFormValid = () => {
    if (email.includes("@") && password.trim().length >= 6) {
      return dispatch(authActions.logIn());
    }
  };

  const onBlurHandler = () => {
    if (email.includes("@") === false && password.trim().length <= 6) {
      setInputOnBlur(true);
    } else {
      setInputOnBlur(false);
    }
  };

  return (
    <>
      <LoginPageDiv>
        <label>Email</label>
        {inputOnBlur && <p>Вы забыли "@"</p>}
        <input
          onBlur={onBlurHandler}
          onChange={(e) => emailChangeHandler(e)}
          type="email"
          placeholder="email..."
        />

        <label>Password</label>
        {inputOnBlur && <p>Пароль не может быть меньше 6 символов</p>}
        <input
          onBlur={onBlurHandler}
          onChange={(e) => passwordChangeHandler(e)}
          type="password"
          placeholder="password..."
        />
        <Link>
          <button onClick={loginFormValid}>Login</button>
        </Link>
      </LoginPageDiv>
    </>
  );
};

export default LoginForm;

const LoginPageDiv = styled.div`
  width: 30%;
  height: 500px;
  background-color: rgba(119, 232, 13, 0.89);
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 30px 20px 7px rgba(0, 0, 0, 0.13);
  input {
    border-style: none;
    border-radius: 10px;
    width: 70%;
    height: 60px;
    list-style: none;
    margin-top: 5px;
    :hover {
      background-color: bisque;
    }
  }
  label {
    font-size: 1.5rem;
    color: rgba($dark, 0.5);
    font-weight: 500;
    color: aliceblue;
    margin-bottom: -100px;
  }
  p {
    font-size: 1.1rem;
    margin-top: 80px;
    color: #000000;
  }
  button {
    border-radius: 10px;
    width: 90px;
    height: 40px;
    border-style: none;
    text-transform: uppercase;
    :hover {
      background-color: crimson;
      color: antiquewhite;
    }
  }
`;
