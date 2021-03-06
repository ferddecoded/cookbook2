import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './Context';

import { NavLink } from 'react-router-dom';
import Button from './Button';
import Image from './Image';
import Modal from './Modal';
import NutritionText from './NutritionText';


const Container = styled.div`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.bsMd};
  overflow: hidden;
  border: 5px solid transparent;
  transition: .3s all;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 5px solid ${({ theme }) => theme.primary};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  height: 180px;

  @media(max-width: 768px) {
  }
`;

const StyledImage = styled(Image)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-left-radius: 10px;

  display: block;

    @media (max-width: 450px) {
      display: none;
    }
`;

const LabelOverlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.grey};
`;

const LabelText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const MobileLabelContainer = styled.div`
    background-color: ${({ theme }) => theme.primary};
    display: none;
    margin: 10px 0px;

    @media (max-width: 450px) {
      display: block;
    }
`;

const MobileLabel = styled.h3`
  text-align: center;
  font-size: 16px;
`;

// const NutritionText = styled.div`
//   font-size: 14px;
//   display: flex;
//   justify-content: space-between;
//   height: 100%;
// `;

// const NutritionLabel = styled.span`
//   font-size: 18px;
//   display: inline-block;
//   font-weight: bold;
// `;

// const NutritionValue = styled.span`
//   display: block;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleRecipeButton = styled(Button)`
  background-color: ${({ theme, userRecipeExists }) => userRecipeExists ? theme.red : theme.secondary};
  color: ${props => props.theme.white};
  margin: 20px auto;
`;

const SearchItem = ({ item }) => {
  const [isHovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { updateCurrentRecipe, userRecipes, currentUser, addRecipe, removeRecipe }  = useContext(AppContext);
  
  if (!item) {
    return null;
  }

  const { label, image, source, url, dietLabels, healthLabels, ingredientLines, calories, totalTime, totalNutrients } = item.recipe;


  const id = item.recipe.ingredientLines?.join().trim();
  const userRecipeExists = userRecipes.find((userRecipe) => userRecipe.id === id);

  // const nutritionHtml = (calories, totalTime) => {
  //   return(
  //     <NutritionText>
  //       <div><NutritionLabel>Calories:</NutritionLabel><NutritionValue>&nbsp;{Math.round(calories)}&nbsp;cals</NutritionValue></div>
  //       <div><NutritionLabel>Total Time:</NutritionLabel><NutritionValue>&nbsp;{totalTime}&nbsp;mins</NutritionValue></div>
  //     </NutritionText>
  //   );
  // };

  const onClick = (recipe) => {
    if (currentUser) {
      if (!userRecipeExists) {
        const updatedIngredientLines = recipe.ingredientLines.map(name => {
          return {
            name,
            completed: false,
          };
        });
        addRecipe({ ...recipe, ingredientLines: updatedIngredientLines, id });
      } else {
        removeRecipe(id);
      }
    } else {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      {showModal && <Modal
        headerContent={<h2>OOPS ...</h2>}
        bodyContent={(
          <>
            <h3>You must be signed in first!</h3>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </>
        )}
      />}
      <NavLink to={`/recipeItem/`} onClick={() => updateCurrentRecipe(item.recipe)}>
        <Container>
          <ImageContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <StyledImage
              src={image}
              alt={label}
            />
            {isHovered &&
              <>
                <OverlayContainer>
                  <LabelOverlay />
                  <LabelText>{label}</LabelText>
                </OverlayContainer>
              </>
            }
          </ImageContainer>
          <TextContainer>
            <MobileLabelContainer><MobileLabel>{label}</MobileLabel></MobileLabelContainer>
            <NutritionText calories={calories} totalTime={totalTime} />
          </TextContainer>
        </Container>
      </NavLink>
      <ButtonContainer>
          <ToggleRecipeButton
            userRecipeExists={userRecipeExists}
            onClick={() => onClick(item.recipe)}
          >
              {userRecipeExists ? 'Remove Recipe' : 'Add Recipe'}
            </ToggleRecipeButton>
      </ButtonContainer>
    </>
  );
};

export default SearchItem;