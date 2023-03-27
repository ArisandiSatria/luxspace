import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/categories/:idc" Component={Details} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
