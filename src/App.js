import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Basket from "./componets/Baske";
import Home from "./componets/Home";

import "./scss/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className="wrapper">
            <header className="header">
              <Link to="/">Shop</Link> <span>|</span> <Link to="/basket">Shoping Cart</Link>
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basket" element={<Basket />} />
            </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
