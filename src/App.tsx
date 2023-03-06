import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import SearchForm from "./pages/SearchForm";

const Wrapper = styled.main`
  background: url("/images/background.jpg");
  background-position: center, center;
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchForm />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
