import { useLocation } from "react-router-dom";

import { SearchCardWrapper, SearchCityCard } from "../SearchForm/components";

const SearchResult = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <SearchCardWrapper>
      <SearchCityCard className="w-100">sdfsdf</SearchCityCard>
    </SearchCardWrapper>
  );
};

export default SearchResult;
