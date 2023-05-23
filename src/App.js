import { Provider } from "react-redux";
import "./App.css";
import MainPage from "./components/MainPage";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

function AppContent() {
  return (
    <>
      <MainPage />
    </>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
