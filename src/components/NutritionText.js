import React from 'react';
import styled from 'styled-components';

const NutritionTextContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  div {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NutritionLabel = styled.span`
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
`;

const NutritionValue = styled.span`
  display: block;
`;

  const NutritionText = ({ calories, totalTime }) => {
    return(
      <NutritionTextContainer>
        <div><NutritionLabel>Calories:</NutritionLabel><NutritionValue>&nbsp;{Math.round(calories)}&nbsp;cals</NutritionValue></div>
        <div><NutritionLabel>Total Time:</NutritionLabel><NutritionValue>&nbsp;{totalTime}&nbsp;mins</NutritionValue></div>
      </NutritionTextContainer>
    );
  };

export default NutritionText;