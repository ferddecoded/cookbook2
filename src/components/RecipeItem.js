import React from 'react';

const RecipeItem = ({ match }) => {
  return <div>Favorite {match.params.id}</div>;
};

export default RecipeItem;