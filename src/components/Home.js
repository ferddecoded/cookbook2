import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppWrapper } from './App';
import SearchForm from './SearchForm';
import { AppContext } from './Context';
import RecipeItems from './RecipeItems';
import InstructionContainer from './InstructionContainer';

const Main = styled.main`
  padding: 0;
  margin: 0;
`;

const HeroContainer = styled.section`
  height: 400px;
  width: 100%;
  background-image: url('./assets/duotone.png');
  background-size: cover;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 450px) {
    height: 550px;
  }
`;

const IntroductorySection = styled.section`
  padding-top: 50px;
  text-align: center;

  h1 {
    font-family: 'Pacifico';
    font-size: 40px;
    color: ${props => props.theme.secondary};
    margin-bottom: 20px;
    line-height:1;
  }

  p {
    color: ${props => props.theme.black};
    font-weight: 700;
  }
`;

const Home = () => {
  const { searchRecipes, recipes, hasSearchError } = useContext(AppContext);
  return (
    <Main>
      <HeroContainer>
        <AppWrapper>
          <IntroductorySection>
            <h1>Search, Shop, Dine</h1>
            <InstructionContainer>
              <p>
                Search a recipe based on the ingredient you enter, also add dietary restrictions or health options of your choosing to the search.
              </p>
              <p>
                Check out your recipe and view more details by clicking the recipe.
              </p>
              <p>
                You can see the ingredient list for the recipe and add it to your favorites to view later.
              </p>
            </InstructionContainer>
          </IntroductorySection>
        </AppWrapper>
      </HeroContainer>
      <SearchForm searchRecipes={searchRecipes} recipes={recipes} />
      <RecipeItems recipes={recipes} hasSearchError={hasSearchError} />
    </Main>
  );
};

export default Home;
