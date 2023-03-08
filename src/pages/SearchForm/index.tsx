import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import SearchCitySelect from "../../components/SearchCitySelect";
import PassengerInput from "../../components/PassengerInput";
import DateInput from "../../components/DateInput";
import {
  SearchCardWrapper,
  SearchCityCard,
  CircleIcon,
  DestinationIcon,
  RouteIcon,
  AddDestinationButton,
  SubmitButton,
} from "./components";

interface DestinationInput {
  value: string;
}

const SearchForm = () => {
  const [destinations, setDestinations] = useState<DestinationInput[]>([
    { value: "" },
  ]);

  function addDestination() {
    setDestinations([...destinations, { value: "" }]);
  }

  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">
        <Row>
          <Col xs={6} md={9}>
            <Row>
              <Col xs={2} className="position-relative">
                <CircleIcon src="/images/circle_icon.png" alt="circle icon" />
              </Col>
              <Col xs={10}>
                <SearchCitySelect label="City of origin" />
              </Col>
              {destinations.map((_, index) => (
                <React.Fragment key={index}>
                  <Col xs={2} className="position-relative mt-2">
                    <RouteIcon src="/images/route_icon.png" alt="route icon" />
                    {index + 1 === destinations.length ? (
                      <DestinationIcon
                        src="/images/destination_icon.png"
                        alt="destination icon"
                      />
                    ) : (
                      <CircleIcon
                        src="/images/circle_icon.png"
                        alt="circle icon"
                      />
                    )}
                  </Col>
                  <Col xs={10} className="mt-2">
                    <SearchCitySelect label="City of destination" />
                  </Col>
                </React.Fragment>
              ))}
              <Col
                xs={2}
                className="position-relative d-flex align-items-center mt-4"
              >
                <img src="/images/plus_icon.png" alt="plus icon" />
              </Col>
              <Col xs={10} className="mt-4">
                <AddDestinationButton onClick={addDestination}>
                  Add destination
                </AddDestinationButton>
              </Col>
            </Row>
          </Col>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={2}>
            <PassengerInput />
            <DateInput label="Date" className="mt-2" />
          </Col>
        </Row>
        <div className="d-flex mt-4">
          <SubmitButton variant="secondary">Submit</SubmitButton>
        </div>
      </SearchCityCard>
    </SearchCardWrapper>
  );
};

export default SearchForm;
