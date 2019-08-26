import React, { useState } from 'react';
import styled from 'styled-components';

import { AppWrapper } from './App';

const Form = styled.form`
  position: relative;
  width: 100%;
  transform: translate(-50%, -20%);
  border-radius: 10px;
  background-color: white;
  left: 50%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const FormHeader = styled.header`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h2 {
    font-family: 'Pacifico';
    color: ${props => props.theme.primary};
    margin-left: 10px;
  }
`;

const FormBody = styled.section`
  margin: 0 auto;
  width: 90%;

  label {
    display: block;
  }
`;

const FormGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const SelectContainer = styled.span`
  cursor: pointer;
  padding: 0px 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all 0.4s ease-in;
  border: 1px solid ${props => props.theme.secondary};
  color: ${({ highlight, theme }) =>
    highlight ? theme.secondary : theme.black};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.primary : theme.white};
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  margin: 10px 0px;
  font-family: 'Arimo';
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: none;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const TextInput = styled.input`
  margin-left: 10px;
  padding: 0px 5px;
  background-color: ${props => props.theme.lightgrey};
  border: none;
  border-radius: 5px;
`;

const SearchForm = () => {
  const [ingredient, setIngredient] = useState('');
  const [dietary, setDietary] = useState('');
  const [selectedHealth, setSelectedHealth] = useState([]);

  const updateIngredient = e => setIngredient(e.target.value);

  const updateHealth = e => {
    const newHealthArray = [...selectedHealth];
    console.log(e.target.id);
    const healthBeenSet = selectedHealth.some(
      allergen => allergen === e.target.id,
    );
    console.log(healthBeenSet);
    healthBeenSet
      ? setSelectedHealth(
          newHealthArray.filter(allergen => allergen !== e.target.id),
        )
      : setSelectedHealth([...newHealthArray, e.target.id]);
  };

  const updateDietary = e => {
    const dietaryBeenSet = dietary === e.target.id;
    console.log(dietaryBeenSet);
    dietaryBeenSet ? setDietary('') : setDietary(e.target.id);
  };

  const health = [
    { id: 'vegan', title: 'Vegan' },
    { id: 'vegetarian', title: 'Vegetarian' },
    { id: 'paleo', title: 'Paleo' },
    { id: 'dairy-free', title: 'Dairy Free' },
    { id: 'gluten-free', title: 'Gluten Free' },
    { id: 'wheat-free', title: 'Wheat Free' },
    { id: 'fat-free', title: 'Fat Free' },
    { id: 'egg-free', title: 'Egg Free' },
    { id: 'peanut-free', title: 'Peanut Free' },
    { id: 'tree-nut-free', title: 'Tree Nut Free' },
    { id: 'soy-free', title: 'Soy Free' },
    { id: 'fish-free', title: 'Fish Free' },
    { id: 'shellfish-free', title: 'Shellfish Free' },
  ];

  const dietaries = [
    { id: 'balanced', title: 'Balanced' },
    { id: 'high-protein', title: 'High Protein' },
    { id: 'high-fiber', title: 'High Fiber' },
    { id: 'low-fat', title: 'Low Fat' },
    { id: 'low-carb', title: 'Low Carb' },
    { id: 'low-sodium', title: 'Low Sodium' },
  ];

  return (
    <AppWrapper>
      <Form>
        <FormHeader>
          <h2>Let's get to searchin'</h2>
        </FormHeader>
        <FormBody>
          <FormGroup style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <label htmlFor="ingredient">
              <h3>Ingredient:</h3>
            </label>
            <TextInput
              value={ingredient}
              type="text"
              id="igredient"
              onChange={updateIngredient}
            />
          </FormGroup>
          <div>
            <h3>Dietary Restrictions</h3>
            <FormGroup>
              {dietaries.map(restriction => (
                <SelectContainer
                  key={restriction.id}
                  id={restriction.id}
                  onClick={updateDietary}
                  highlight={dietary === restriction.id}
                >
                  {restriction.title}
                </SelectContainer>
              ))}
            </FormGroup>
          </div>
          <div>
            <h3>Health Options</h3>
            <FormGroup>
              {health.map(allergy => (
                <SelectContainer
                  key={allergy.id}
                  onClick={updateHealth}
                  id={allergy.id}
                  highlight={selectedHealth.some(
                    allergen => allergen === allergy.id,
                  )}
                >
                  {allergy.title}
                </SelectContainer>
              ))}
            </FormGroup>
          </div>
          <Button
            onClick={e => {
              e.preventDefault();
              console.log({ ingredient, selectedHealth, dietary });
            }}
          >
            Search It!
          </Button>
        </FormBody>
      </Form>
    </AppWrapper>
  );
};

export default SearchForm;
