import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './Context';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  height: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const TextContainer = styled.div``;

const RecipeHeading = styled.h2`
  font-family: 'Pacifico', cursive;
`;

const RecipeItem = () => {
  const { currentRecipe } = useContext(AppContext);
  const { label, image, source, url, dietLabels, healthLabels, ingredientLines, calories, totalTime, totalNutrients } = currentRecipe;
  return (
    <Container>
      <FlexContainer>
        <ImageContainer>
          <Image
            src={image}
          />
        </ImageContainer>
        <TextContainer>
          <RecipeHeading>
            {label}
          </RecipeHeading>
        </TextContainer>
      </FlexContainer>
    </Container>
  );
};

export default RecipeItem;