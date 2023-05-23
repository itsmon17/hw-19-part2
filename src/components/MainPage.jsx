import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import LoginForm from "./LoginForm";
import TodoList from "./Todo";

const MainPage = () => {
  const { isFormValid } = useSelector((state) => state.loginForm);
  return (
    <div>
      <Header />
      {!isFormValid ? <LoginForm /> : <TodoList />}
    </div>
  );
};

export default MainPage;
