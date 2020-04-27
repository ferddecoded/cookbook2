import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './Context';
import Image from './Image';
import ChevronLink from './ChevronLink';
import NutritionText from './NutritionText';

const StyledAppWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 20px auto;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.bsMd};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 20%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const TextContainer = styled.div`
  padding: 0px 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RecipeHeading = styled.h2`
  font-family: 'Pacifico', cursive;
`;

const FavoriteItem = (recipe) => {
  const { updateCurrentRecipe } = useContext(AppContext);

  if (!recipe) {
    return null;
  }
  
  const { label, image, calories, totalTime } = recipe;
  
  return (
    <StyledAppWrapper>
      <Container>
        <FlexContainer>
          <ImageContainer>
            <StyledImage
              src={image}
            />
          </ImageContainer>
          <TextContainer>
            <RecipeHeading>
              {label}
            </RecipeHeading>
            <TextContainer>
              <NutritionText
                calories={calories}
                totalTime={totalTime}
              />
            </TextContainer>
            <ChevronLink to={`/recipeItem/`} onClick={() => {
              const newRecipe = {...recipe};
              updateCurrentRecipe(newRecipe);
            }}>
              View More Details
            </ChevronLink>
          </TextContainer>
        </FlexContainer>
      </Container>
    </StyledAppWrapper>
  );
};

export default FavoriteItem;