import React from 'react';

const Favorite = ({ match }) => {
  return <div>Favorite {match.params.id}</div>;
};

export default Favorite;
