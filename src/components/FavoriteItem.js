import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import firebase from './Firebase';
import { AppContext } from './Context';
import IngredientCheckbox from './IngredientCheckbox';
import Link from './Link';
import Image from './Image';

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
  width: 20%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const TextContainer = styled.div`
  padding: 10px 20px;
  width: 80%;
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

const FavoriteItem = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const { currentRecipe } = useContext(AppContext);

  const { label, image, source, url, dietLabels, healthLabels, ingredientLines, calories, totalTime, totalNutrients } = currentRecipe;

  const dbRefUser = firebase.database().ref(`users/${firebase.auth()?.currentUser?.uid}`);

  useEffect(() => {
    if (ingredientLines) {
      const ingredientsCheckList = ingredientLines?.map((ingredient) => ({name: ingredient, checked: false}));
      const recipeKey = ingredientLines.join();
      console.log({ recipeKey });
      setIngredientList(ingredientsCheckList);
    }
  }, [ingredientLines]);

  const updateIngrdientList = (index) => {
    const updatedList = [...ingredientList];
    updatedList[index].checked = !updatedList[index].checked;
    setIngredientList(updatedList);
  };

  if (Object.keys(currentRecipe).length === 0 && currentRecipe.constructor === Object) {
    return null;
  }
  
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
              {ingredientList.map(({ name, checked }, i) => {
                return (
                  <IngredientCheckbox id={name} key={i.toString()} checked={checked} onChange={updateIngrdientList} ingredientIndex={i} />
                );
              })}
            </IngredientList>
            <Link href={url}>View More ></Link>
          </TextContainer>
        </FlexContainer>
      </Container>
    </StyledAppWrapper>
  );
};

export default FavoriteItem;