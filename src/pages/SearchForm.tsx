import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import SearchCitySelect from "../components/SearchCitySelect";

export const SearchCardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 734px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchCityCard = styled(Card)`
  padding: 62px;
  border: unset;
`;

const SearchForm = () => {
  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">
        <Row>
          <Col xs={1}>
            <img
              src="/images/search_form_prefix.png"
              alt="search form prefix"
            />
          </Col>
          <Col xs={6} md={8}>
            <SearchCitySelect label="City of origin" />
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
