import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './Context';
import IngredientCheckbox from './IngredientCheckbox';
import Image from './Image';
import { NavLink } from 'react-router-dom';

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
`;

const RecipeHeading = styled.h2`
  font-family: 'Pacifico', cursive;
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

const FavoriteItem = (recipe) => {
  const { updateCurrentRecipe } = useContext(AppContext);

  if (!recipe) {
    return null;
  }
  
  const { label, image } = recipe;
  
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
            <IngredientHeading>Ingredients:</IngredientHeading>
            <IngredientList>
              {recipe?.ingredientLines?.length > 0 && recipe.ingredientLines.map(({ name, checked }, i) => {
                if (i > 3) {
                  return null;
                }
                return (
                  <IngredientCheckbox id={name} key={i.toString()} checked={checked} ingredientIndex={i} onChange={() => null} disabled />
                );
              })}
            </IngredientList>
            <NavLink to={`/recipeItem/`} onClick={() => {
              const newRecipe = {...recipe};
              updateCurrentRecipe(newRecipe);
            }}>
              View More Details >
            </NavLink>
          </TextContainer>
        </FlexContainer>
      </Container>
    </StyledAppWrapper>
  );
};

export default FavoriteItem;