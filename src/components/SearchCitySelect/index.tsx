import { useState, ChangeEvent } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { debounce } from "lodash";
import { AxiosResponse } from "axios";

import {
  SpinnerWrapper,
  CityListGroup,
  CrossIcon,
  InputLabel,
} from "./components";
import Spinner from "../Spinner";
import { searchCity } from "../../services/cityService";
import type { City } from "../../types";

interface SearchCitySelectProps {
  label: string;
  [key: string]: any;
}

const SearchCitySelect = ({ label, ...otherProps }: SearchCitySelectProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<City[]>([]);

  const debounceSearchCity = debounce((keyword: string) => {
    setIsLoading(true);
    searchCity(keyword)
      .then((response: AxiosResponse<{ cities: City[] }>) => {
        const { cities } = response.data;
        setResult(cities);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 500);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    debounceSearchCity(event.target.value);
    setInputValue(event.target.value);
  }

  function handleClickItem(index: number) {
    setInputValue(result[index].name);
    setResult([]);
  }

  function clearInput() {
    setInputValue("");
    setResult([]);
  }

  return (
    <Form.Group className="position-relative">
      <InputLabel>{label}</InputLabel>
      <Form.Control
        type="string"
        {...otherProps}
        onChange={handleOnChange}
        value={inputValue}
      />
      {inputValue && (
        <CrossIcon
          src="/images/cross_icon.png"
          alt="cross icon"
          onClick={clearInput}
        />
      )}
      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      {result.length ? (
        <CityListGroup>
          {result.map((item, index) => (
            <ListGroup.Item
              key={item.name + index}
              onClick={() => handleClickItem(index)}
            >
              {item.name}
            </ListGroup.Item>
          ))}
        </CityListGroup>
      ) : (
        ""
      )}
    </Form.Group>
  );
};

export default SearchCitySelect;
