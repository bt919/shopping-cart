import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Home from "./components/home";
import Shop from "./components/shop";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home></Home>} exact></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
