import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  ErrorMessage,
} from "./components";

interface DestinationInput {
  value: string;
}

const validationSchema = Yup.object().shape({
  originCity: Yup.string().required("You must choose the city of origin"),
});

const SearchForm = () => {
  const [destinations, setDestinations] = useState<DestinationInput[]>([
    { value: "" },
  ]);
  const [isTouchDestinationCities, setIsTouchDestinationCities] =
    useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      originCity: "",
      destinationCities: [],
      passenger: 10,
      date: "01/01/2023",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function addDestination() {
    setDestinations([...destinations, { value: "" }]);
  }

  function updateFormikOriginCity(value: string) {
    formik.setFieldValue("originCity", value);
  }

  function updateFomikDestinations(index: number, value: string) {
    const destinationCities: string[] = formik.values.destinationCities;
    if (destinationCities[index]) destinationCities[index] = value;

    formik.setFieldValue("destinationCities", destinationCities);
  }

  function validateDestination(destinationCities: string[], index: number) {
    if (destinationCities[index]) return false;
    return true;
  }

  function updatePassenger(value: number) {
    formik.setFieldValue("passenger", value);
  }

  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">
        <Form>
          <Row>
            <Col xs={6} md={9}>
              <Row>
                <Col xs={2} className="position-relative">
                  <CircleIcon src="/images/circle_icon.png" alt="circle icon" />
                </Col>
                <Col xs={10} className="position-relative">
                  <SearchCitySelect
                    label="City of origin"
                    id="originCity"
                    name="originCity"
                    onChange={updateFormikOriginCity}
                    value={formik.values.originCity}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.originCity && (
                    <ErrorMessage>{formik.errors.originCity}</ErrorMessage>
                  )}
                </Col>
                {destinations.map((_, index) => (
                  <React.Fragment key={index}>
                    <Col xs={2} className="position-relative mt-3">
                      <RouteIcon
                        src="/images/route_icon.png"
                        alt="route icon"
                      />
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
                    <Col xs={10} className="mt-3 position-relative">
                      <SearchCitySelect
                        label="City of destination"
                        onChange={(val: string) =>
                          updateFomikDestinations(index, val)
                        }
                        value={formik.values.destinationCities[index]}
                        onBlur={() => setIsTouchDestinationCities(true)}
                      />
                      {validateDestination(
                        formik.values.destinationCities,
                        index
                      ) &&
                        isTouchDestinationCities && (
                          <ErrorMessage>
                            You must choose the city of origin
                          </ErrorMessage>
                        )}
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
              <PassengerInput
                value={formik.values.passenger}
                onChange={(value: number) => updatePassenger(value)}
              />
              <DateInput label="Date" className="mt-2" />
            </Col>
            <div className="d-flex mt-4">
              <SubmitButton variant="secondary">Submit</SubmitButton>
            </div>
          </Row>
        </Form>
      </SearchCityCard>
    </SearchCardWrapper>
  );
};

export default SearchForm;
