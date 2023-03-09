import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SearchCardWrapper, SearchCityCard } from "../SearchForm/components";
import { getCalcuateDistances } from "../../redux/modules/citySlice";
import { useAppDispatch } from "../../redux/hooks";

const SearchResult = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getCalcuateDistances([
        location.state.originCity,
        ...location.state.destinationCities,
      ])
    );
  }, [location.state.originCity, location.state.destinationCities, dispatch]);

  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">sdfsdf</SearchCityCard>
    </SearchCardWrapper>
  );
};

export default SearchResult;
