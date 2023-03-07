import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import SearchCitySelect from "../../components/SearchCitySelect";
import {
  SearchCardWrapper,
  SearchCityCard,
  CircleIcon,
  DestinationIcon,
  RouteIcon,
  AddDestinationButton,
} from "./components";

interface DestinationInput {
  value: string;
}

const SearchForm = () => {
  const [destinations, setDestinations] = useState<DestinationInput[]>([
    {
      value: "",
    },
  ]);

  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">
        <Row>
          <Col xs={6} md={8}>
            <Row>
              <Col xs={2} className="position-relative">
                <CircleIcon src="/images/circle_icon.png" alt="circle icon" />
              </Col>
              <Col xs={10}>
                <SearchCitySelect label="City of origin" />
              </Col>
              {destinations.map((_, index) => (
                <>
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
                </>
              ))}
              <Col
                xs={2}
                className="position-relative d-flex align-items-center mt-4"
              >
                <img src="/images/plus_icon.png" alt="plus icon" />
              </Col>
              <Col xs={10} className="mt-4">
                <AddDestinationButton>Add destination</AddDestinationButton>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3}>
            Column 3
          </Col>
        </Row>
      </SearchCityCard>
    </SearchCardWrapper>
  );
};

export default SearchForm;
