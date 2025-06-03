import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Awareness from "./components/Awareness";
import Therapy from "./components/Therapy";

function App() {
  const [expandTarget, setExpandTarget] = useState(null);

  return (
    <div className="mt-4 mb-10">
      <Header />
      <Banner />
      <Carousel onLearnMoreClick={setExpandTarget} />
      <Awareness />
      <Therapy expandTarget={expandTarget} />
    </div>
  );
}

export default App;
