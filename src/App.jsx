import { useEffect } from "react";
import "./App.css";
import { cakeActions } from "./features/cake/cakeSlice";
import { fetchUsers } from "./features/user/userSlice";
import { store } from "./store";

function App() {
  useEffect(() => {
    // store.dispatch(cakeActions.ordered());
    store.dispatch(fetchUsers());
  }, []);

  return <>op</>;
}

export default App;
