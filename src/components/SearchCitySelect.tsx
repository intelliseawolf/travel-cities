import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

import { searchCity } from "../services/cityService";

interface SearchCitySelectProps {
  label: string;
  [key: string]: any;
}

const SearchCitySelect = ({ label, ...otherProps }: SearchCitySelectProps) => {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    searchCity(event.target.value);
  }

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="string" {...otherProps} onChange={handleOnChange} />
    </Form.Group>
  );
};

export default SearchCitySelect;
