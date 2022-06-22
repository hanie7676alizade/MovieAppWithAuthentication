import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import SwitchRoute from "routes/SwitchRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <SwitchRoute />
    </BrowserRouter>
  );
}

export default App;
