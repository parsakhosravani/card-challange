import CardInput from "./components/CardInput";

import "./app.css";
import Slider from "./components/CardSlider";
import { useState } from "react";

function App() {
  const [card, setCard] = useState([]);
  return (
    <div className="container">
      <CardInput card={card} setCard={setCard} />
      <hr />
      <Slider card={card} />
    </div>
  );
}

export default App;
