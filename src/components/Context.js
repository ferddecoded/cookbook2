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
  const [userRecipes, setUserRecipes] = useState([]);

  const searchRecipes = async (ingredient, dietarySelection, healthOptionsArray) => {
    const fetchedRecipes = await fetchRecipes(ingredient, dietarySelection, healthOptionsArray);
    setFetchedRecipes(fetchedRecipes.data.hits);
  };

  const updateCurrentRecipe = (recipeItem) => {
    setCurrentRecipe(recipeItem);
  };

  const updateRecipe = (recipeItem) => {
    const dbRefUser = firebase.database().ref(`users/${firebase.auth().currentUser.uid}`);
    dbRefUser.on("value", snapshot => {
      const data = snapshot.val();
      const entries = Object.entries(data);
      const matchedEntry = entries?.find(([_, {id}]) => id === recipeItem.id);
      if (matchedEntry) {
        const [dbKey] = matchedEntry;
        const dbRefRecipe = firebase.database().ref(`users/${firebase.auth().currentUser.uid}/${dbKey}`);
        dbRefRecipe.set(recipeItem);
      }
    });
  };

  const addRecipe = (recipe) => {
    const dbRefUser = firebase.database().ref(`users/${firebase.auth().currentUser.uid}`);
    dbRefUser.push(recipe).catch(err => console.warn(err));
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    if (currentUser?.email) {
      const dbref = firebase
        .database()
        .ref(`users/${firebase.auth()?.currentUser?.uid}`);
        dbref.on("value", snapshot => {
          console.log(snapshot.val());
          const data = snapshot.val();
          const dbRecipes = [];
          for (let key in data) {
            data[key].key = key;
            dbRecipes.push({...data[key], dbId: key});
          }
          setUserRecipes(dbRecipes);
        });
    }
  }, [currentUser]);

  const contextValue = {
    currentUser,
    recipes,
    userRecipes,
    searchRecipes,
    currentRecipe,
    setCurrentUser,
    updateCurrentRecipe,
    updateRecipe,
    addRecipe,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
