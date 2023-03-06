import { Form } from "react-bootstrap";

interface SearchCitySelectProps {
  label: string;
  [key: string]: any;
}

const SearchCitySelect = ({ label, ...otherProps }: SearchCitySelectProps) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="string" {...otherProps} />
    </Form.Group>
  );
};

export default SearchCitySelect;
