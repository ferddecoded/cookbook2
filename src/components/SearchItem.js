import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.bs};
  overflow: hidden;
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

const Image = styled.img`
  width: 100%;
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
  padding: 20px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const MobileLabelContainer = styled.div`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 10px;
    display: none;

    @media (max-width: 450px) {
      display: block;
    }
`;

const MobileLabel = styled.h3`
  text-align: center;
  font-size: 16px;
`;

const NutritionText = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;

const NutritionLabel = styled.span`
  font-size: 14px;
  text-decoration: underline wavy ${({ theme }) => theme.secondary};
  display: inline-block;
`;

const SearchItem = ({ item }) => {
  const [isHovered, setHovered] = useState(false);
  if (!item) {
    return null;
  }
  const { label, image, source, url, dietLabels, healthLabels, ingredientLines, calories, totalTime, totalNutrients } = item.recipe;

  const nutritionHtml = (calories, totalTime) => {
    return(
      <NutritionText>
        <div><NutritionLabel>Calories:</NutritionLabel>&nbsp;{Math.round(calories)}&nbsp;cals</div>
        <div><NutritionLabel>Total Time:</NutritionLabel>&nbsp;{totalTime}&nbsp;mins</div>
      </NutritionText>
    );
  };
  return (
    <NavLink to={`/recipeItem/`}>
      <Container>
        <ImageContainer
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
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
          {nutritionHtml(calories, totalTime)}
        </TextContainer>
      </Container>
    </NavLink>
  );
};

export default SearchItem;