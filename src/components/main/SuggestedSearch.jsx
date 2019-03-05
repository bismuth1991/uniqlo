import React from 'react';
import styled from 'styled-components';

import { PrimaryTitle } from '../styled/Titles';

const SearchTag = styled.li`
  cursor: pointer;
  padding: 0.9rem 2%;
  margin-right: 2%;
  margin-bottom: 0.9rem;
  color: #1b1b1b;
  font-size: 13px;
  font-family: 'Helvetica Neue';
  line-height: 1.5rem;
  border: 1px solid #ababab;
  display: inline-block;
`;

const SearchWrapper = styled.ul`
  padding: 0 1.5rem;
  list-style: none;
`;

const searchTags = ['ut', 'airism', 'jump 50th', 'disney', 'marvel', 'shorts'];

const SuggestedSearch = () => (
  <>
    <PrimaryTitle>
      Suggested Search
    </PrimaryTitle>

    <SearchWrapper>
      {searchTags.map(tag => (
        <SearchTag key={tag}>
          {`# ${tag}`}
        </SearchTag>
      ))}
    </SearchWrapper>
  </>
);

export default SuggestedSearch;
