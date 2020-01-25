import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './Context';
import IngredientCheckbox from './IngredientChecbox';

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
  box-shadow: ${({ theme }) => theme.bs};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 200px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const TextContainer = styled.div`
  padding: 10px 20px;
`;

const RecipeHeading = styled.h2`
  font-family: 'Pacifico', cursive;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.secondary};
  font-size: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const IngredientHeading = styled.h3`
  font-weight: 500;
`;

const IngredientList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const RecipeItem = () => {
  const { currentRecipe } = useContext(AppContext);

  if (Object.keys(currentRecipe).length === 0 && currentRecipe.constructor === Object) {
    return null;
  }

  const { label, image, source, url, dietLabels, healthLabels, ingredientLines, calories, totalTime, totalNutrients } = currentRecipe;
  return (
    <StyledAppWrapper>
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
            <IngredientHeading>Ingredients:</IngredientHeading>
            <IngredientList>
              {ingredientLines.map(ingredient => {
                return (
                  <IngredientCheckbox id={ingredient} />
                );
              })}
            </IngredientList>
            <Link href={url}>View Recipe ></Link>
          </TextContainer>
        </FlexContainer>
      </Container>
    </StyledAppWrapper>
  );
};

export default RecipeItem;