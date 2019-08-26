import React from 'react';
import styled from 'styled-components';
import { AppWrapper } from './App';
import SearchForm from './SearchForm';

const Main = styled.main`
  padding: 0;
  margin: 0;
`;

const HeroContainer = styled.section`
  height: 400px;
  width: 100%;
  background-image: url('/assets/duotone.png');
  background-size: cover;
`;

const IntroductorySection = styled.section`
  padding-top: 50px;
  text-align: center;

  h1 {
    font-family: 'Pacifico';
    font-size: 40px;
    color: ${props => props.theme.secondary};
    margin-bottom: 20px;
  }

  p {
    color: ${props => props.theme.black};
    font-weight: 700;
  }
`;

const Home = () => {
  return (
    <Main>
      <HeroContainer>
        <AppWrapper>
          <IntroductorySection>
            <h1>Search, Shop, Dine</h1>
            <p>
              Welcome, this App allows you to create a list of all your favorite
              recipes. Store them, access them whenever you want and update the
              shopping list of ingredients.
            </p>
          </IntroductorySection>
        </AppWrapper>
      </HeroContainer>
      <SearchForm />
    </Main>
  );
};

export default Home;
