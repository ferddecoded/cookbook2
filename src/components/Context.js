import React, { useState, useEffect } from 'react';
import axios from 'axios';

import firebase from './Firebase';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [recipes, setFetchedRecipes] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  const searchRecipes = async (
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
    setFetchedRecipes(response.data.hits);
  };

  return (
    <AppContext.Provider value={{ currentUser, recipes, searchRecipes, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};
