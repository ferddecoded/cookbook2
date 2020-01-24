import React, { useState, useEffect } from 'react';
import axios from 'axios';

import firebase from './Firebase';

export const AppContext = React.createContext();

const fetchRecipes = async (
    ingredient = '',
    dietarySelection = null,
    healthOptionsArray = [],
  ) => {
    const searchRecipesUrl = 'https://api.edamam.com/search';
    const appId = '&app_id=b9c1bc9c';
    const appKey = '&app_key=ebcdd97c656c869ee63a5bae6dd6456c';

    const ingredientQuery = `?&q=${ingredient}`;
    const dietQuery = dietarySelection ? `&diet=${dietarySelection}` : '';
    const healthQuery =
      healthOptionsArray.length > 0
        ? healthOptionsArray
            .map(healthOption => `&health=${healthOption}`)
            .join('')
        : '';

    const searchQueryUrl = `${searchRecipesUrl}${ingredientQuery}${appId}${appKey}${dietQuery}${healthQuery}`;

    const response = await axios.get(searchQueryUrl);
    return response;
  };

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [recipes, setFetchedRecipes] = useState(null);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const searchRecipes = async (ingredient, dietarySelection, healthOptionsArray) => {
    const fetchedRecipes = await fetchRecipes(ingredient, dietarySelection, healthOptionsArray);
    setFetchedRecipes(fetchedRecipes.data.hits);
  };

  const updateCurrentRecipe = (recipeItem) => {
    setCurrentRecipe(recipeItem);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  const contextValue = { currentUser, recipes, searchRecipes, setCurrentUser, currentRecipe, updateCurrentRecipe };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
