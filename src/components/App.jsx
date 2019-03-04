import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import CommingSoon from './CommingSoon/CommingSoon';

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
    <CommingSoon />
  </Main>
);

export default App;
