import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Components/utils/DentistContext";

const Favs = () => {
  const { state } = useDentistState()
  return (
    <div className={state.theme}>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {state.favs.map(fav => <Card dentist={fav} key={fav.id} />)}
      </div>
    </div>
  );
};

export default Favs;
