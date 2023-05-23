import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { authActions } from "../store/authSlice";
// import { actionTypeReducer } from "../store/authSlice";

const Header = () => {
  const { isFormValid } = useSelector((state) => state.loginForm);
  console.log(isFormValid);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };
  return (
    <HeaderStyle>
      <p>Todo list</p>
      <button onClick={logOutHandler} disabled={!isFormValid}>
        LogOut
      </button>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: #17181676;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #fefaf1;
  p {
    margin-left: 30px;
  }
  button {
    margin-right: 30px;
    background-color: #ac10ea;
    border-style: none;
    color: #fefaf1;
    height: 40px;
    border-radius: 5px;
    margin-left: 20px;
    :hover {
      background-color: #8956f1;
      color: antiquewhite;
      margin-top: -3px;
      box-shadow: 3px 13px 10px 0px rgba(34, 60, 80, 0.2);
    }
  }
`;
