import AppNavigation from "./navigation/appNavigation";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = configureStore({reducer: rootReducer});

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
