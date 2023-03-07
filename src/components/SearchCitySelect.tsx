import { useState, ChangeEvent } from "react";
import { Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { debounce } from "lodash";
import { AxiosResponse } from "axios";

import Spinner from "./Spinner";
import { searchCity } from "../services/cityService";
import type { City } from "../types";

interface SearchCitySelectProps {
  label: string;
  [key: string]: any;
}

const SpinnerWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  border: 1px solid #c7d1f4;
  border-radius: 8px;
  top: calc(100% + 7px);

  &::before {
    content: "";
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #c7d1f4;
    top: -6px;
    left: 16px;
  }
`;

const CityListGroup = styled(ListGroup)`
  position: absolute;
  top: calc(100% + 7px);
  background: white;
  width: 100%;
  border: 1px solid #c7d1f4;
  border-radius: 8px;
  padding: 6px;

  &::before {
    content: "";
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #c7d1f4;
    top: -6px;
    left: 16px;
  }

  .list-group-item {
    border-color: white;
    border-radius: 8px;

    &:hover {
      background: #c7d1f4;
      cursor: pointer;
    }
  }
`;

const CrossIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 12px;
  bottom: 11px;
`;

const InputLabel = styled(Form.Label)`
  font-size: 12px;
  font-weight: 500;
`;

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
