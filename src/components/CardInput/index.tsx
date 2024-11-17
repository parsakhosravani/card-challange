import { useState, useEffect, useRef } from "react";
import "./style.css";
import getBanks, { TBanks } from "../../services/api";

function CardInput({ setCard, card }) {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [bankName, setBankName] = useState("********");
  const [banks, setBanks] = useState([]);
  const inputRef = useRef([]);
  useEffect(() => {
    // TODO: Fetch the bank data from the API in services folder
    getBanks().then((data: TBanks[]) => {
      setBanks(data);
    });
  }, []);

  const handleInputChange = (index: number, value: string) => {
    // TODO: Handle input changes and check for PAN matches
    // Bonus: Go to next input if current filled and back to previous if current is clear
    const newInputs = [...inputs];
    newInputs[index] = (value || "").slice(0, 4);
    banks.filter((bank: TBanks) => {
      if (bank.pan?.includes(newInputs.join(""))) {
        setBankName(bank.name.fa);
      }
    });
    if (newInputs[index].length === 4) {
      inputRef.current[index + 1]?.focus();
    }
    setInputs(newInputs);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div>{bankName}</div>
      </div>
      <div className="card-input-container">
        {inputs.map((input, idx) => (
          <input
            ref={(input) => (inputRef.current[idx] = input)}
            key={idx}
            className="card-input"
            maxLength={4}
            value={input}
            onChange={(e) => handleInputChange(idx, e.target.value)}
          />
        ))}
      </div>
      <div className="button-container ">
        <button
          onClick={() =>
            setCard([...card, { cardName: bankName, cardNumber: inputs }])
          }
          className="button"
        >
          افزودن
        </button>
      </div>
    </div>
  );
}

export default CardInput;
