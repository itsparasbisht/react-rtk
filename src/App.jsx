import { useEffect } from "react";
import "./App.css";
import { cakeActions } from "./features/cake/cakeSlice";
import { store } from "./store";

function App() {
  useEffect(() => {
    store.dispatch(cakeActions.ordered());
  }, []);

  return <>op</>;
}

export default App;
