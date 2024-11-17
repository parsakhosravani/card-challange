import Card from "../Card";

import "./style.css";

const Slider = ({ card }) => {
  console.log(card);
  return (
    <div className="slider-container ">
      {card.map((item) => (
        <Card
          cardNumber={item.cardNumber}
          cardBank={item.cardName}
          isActive={false}
          onActive={() => {}}
        />
      ))}
    </div>
  );
};

export default Slider;
