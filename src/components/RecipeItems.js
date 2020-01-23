import React from 'react';
import styled from 'styled-components';
import { AppWrapper } from './App';
import SearchItem from './SearchItem';

const NoResultsContainer = styled('div')`
  margin: 20px 0px;
  padding: 20px 0px;
  width: 100%;
  background-color: ${({ theme }) => theme.lightgrey};
  color: grey;
  border-radius: 10px;
  text-align: center;
`;

const NoResults = () => {
  return(
    <NoResultsContainer>
      Please Enter A Search
    </NoResultsContainer>
  );
};

const Container = styled('section')`
  margin: 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeContainer = styled.div`
  margin: 0px 20px 20px;
  @media (max-width: 1100px) {
  width: calc(33.33% - 40px);
  height: 300px;
  }
  @media (max-width: 768px) {
    width: calc(50% - 40px);
  }
  @media (max-width: 450px) {
    margin: 20px 0px 20px;
    width: 100%;
  }
`;

const RecipeItems = ({ recipes }) => {
  let content;
  if (!recipes || !recipes.length) {
    content = <NoResults />;
  }else {
    content = recipes.map((recipe) => {
          return (
            <RecipeContainer>
              <SearchItem item={recipe} />
            </RecipeContainer>
          );
        })
  }
  return (
    <AppWrapper>
      <Container>
        {content}
      </Container>
    </AppWrapper>
  );
};

export default RecipeItems;
