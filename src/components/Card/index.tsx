import { useEffect, useImperativeHandle, useRef, useState } from "react";

import "./style.css";

const Card = ({ cardNumber, cardBank }: any) => {
  const cardRef = useRef();
  const [isActive, setIsActive] = useState();

  const observer = new IntersectionObserver(
    (data) => setIsActive(data[0].isIntersecting),
    {
      root: cardRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    }
  );
  useEffect(() => {
    observer.observe(cardRef?.current);
  }, []);
  return (
    <div
      ref={cardRef}
      className={`slider-card ${isActive && "slider-card--active"}`}
    >
      {cardNumber}
      <br />
      {cardBank}
    </div>
  );
};

export default Card;
