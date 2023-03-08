import { useState } from "react";
import { Form } from "react-bootstrap";

import { InputLabel } from "../SearchCitySelect/components";
import { StyledDatePicker } from "./components";

interface DateInputProps {
  label: string;
  className?: string;
}

const DateInput = ({ label, className }: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Form.Group className={`position-relative ${className}`}>
      <InputLabel>{label}</InputLabel>
      <StyledDatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
      />
    </Form.Group>
  );
};

export default DateInput;
