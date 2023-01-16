import BarraNav from "./components/BarraNav";
import CheckPage from "./components/CheckPage";
import Productos from "./components/Productos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { firebaseApp } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/checkoutForm/Checkout";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <BarraNav />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/cart" element={<CheckPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
