import "./App.css";

import Header from "./components/Header";
import Visual from "./pages/Visual";
import SweetPark from "./pages/SweetPark";
import Vr from "./pages/Vr";
import Program from "./pages/Program";
import Schedule from "./pages/Schedule";
import Notice from "./pages/Notice";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Visual />
      <SweetPark />
      <Vr />
      <Program />
      <Schedule />
      <Notice />
      <Footer />
    </div>
  );
}

export default App;
