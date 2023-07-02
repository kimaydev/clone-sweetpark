import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
