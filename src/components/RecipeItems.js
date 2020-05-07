import React from 'react';
import styled from 'styled-components';

import SearchItem from './SearchItem';
import MessageBox from './MessageBox';
import { AppWrapper } from './App';

const Container = styled('section')`
  margin: 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeContainer = styled.div`
  margin: 0px 20px 20px;
  width: calc(33.33% - 40px);
  @media (max-width: 768px) {
    width: calc(50% - 40px);
  }
  @media (max-width: 450px) {
    margin: 20px 0px 20px;
    width: 100%;
  }
`;

const Heading = styled.h2`
  width: 155px;
  margin: 0 auto;
`;

const RecipeItems = ({ recipes, hasSearchError }) => {
  let content;
  if (!recipes || !recipes.length) {
    content = <MessageBox message={hasSearchError || 'Please Enter A Search'} />;
  } else {
    content = (
      <>
        <Heading>Your Recipes:</Heading>
        <Container>
          {recipes.map((recipe, i) => {
            return (
              <RecipeContainer key={i}>
                <SearchItem item={recipe} />
              </RecipeContainer>
            );
          })}
        </Container>
      </>
    );
  }
  return (
    <AppWrapper id="recipe-item-container">
      {content}
    </AppWrapper>
  );
};

export default RecipeItems;
