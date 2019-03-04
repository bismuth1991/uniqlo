import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Main = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
`;

const App = () => (
  <Main>
    <Header />
  </Main>
);

export default App;
