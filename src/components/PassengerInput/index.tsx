import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { InputLabel } from "../SearchCitySelect/components";
import { InputWrapper } from "./components";

interface PassengerInputProps {
  value?: number;
}

const PassengerInput = ({ value = 10 }: PassengerInputProps) => {
  const [inputValue, setInputValue] = useState<number>(0);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleInputValue(val: number) {
    setInputValue(val);
  }

  return (
    <Form.Group className="position-relative">
      <InputLabel>Passengers</InputLabel>
      <InputWrapper>
        <img
          className="cursor-pointer"
          onClick={() => handleInputValue(inputValue - 1)}
          src="/images/passenger_minus_icon.png"
          alt="passenger minus icon"
        />
        <span>{inputValue}</span>
        <img
          className="cursor-pointer"
          onClick={() => handleInputValue(inputValue + 1)}
          src="/images/passenger_plus_icon.png"
          alt="passenger plus icon"
        />
      </InputWrapper>
    </Form.Group>
  );
};

export default PassengerInput;
