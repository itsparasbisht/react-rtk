import { useEffect } from "react";
import "./App.css";
import { cakeActions } from "./features/cake/cakeSlice";
import { store } from "./store";

function App() {
  useEffect(() => {
    store.dispatch(cakeActions.ordered());
    store.dispatch(cakeActions.ordered());
    store.dispatch(cakeActions.ordered());
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }, []);

  return <>op</>;
}

export default App;
