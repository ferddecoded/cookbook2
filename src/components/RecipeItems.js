import React from 'react';
import styled from 'styled-components';

import SearchItem from './SearchItem';
import MessageBox from './MessageBox';

const Wrapper = styled.div`
  margin: 20px auto;
  width: 90%;
`;

const Container = styled('section')`
  margin: 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const RecipeContainer = styled.div`
  margin: 0px 20px 20px;
  @media (max-width: 1100px) {
  width: calc(33.33% - 40px);
  }
  @media (max-width: 768px) {
    width: calc(50% - 40px);
  }
  @media (max-width: 450px) {
    margin: 20px 0px 20px;
    width: 100%;
  }
`;

const RecipeItems = ({ recipes, hasSearchError }) => {
  let content;
  if (!recipes || !recipes.length) {
    content = <MessageBox message={hasSearchError || 'Please Enter A Search'} />;
  }else {
    content = recipes.map((recipe, i) => {
          return (
            <RecipeContainer>
              <SearchItem item={recipe} key={i} />
            </RecipeContainer>
          );
        })
  }
  return (
    <Wrapper>
      <Container>
        {content}
      </Container>
    </Wrapper>
  );
};

export default RecipeItems;
