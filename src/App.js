import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Wrap } from "./style/MainStyle";

import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
