import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart"
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/categories/:idc" Component={Details} />
          <Route path="/cart" Component={Cart} />
          <Route path="/congratulation" Component={Congratulation} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
