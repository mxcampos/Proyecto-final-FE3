import React from "react";
import { Link } from "react-router-dom";
import { useDentistState } from "./utils/DentistContext";

const Card = ({ dentist }) => {

  const { state, dispatch } = useDentistState()
  const findFav = state.favs.find(fav => fav.id == dentist.id)

  const addFav = () => {
   
    if (findFav) {
      alert('El Dentista ya habia sido agregado previamente')
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist })
    }
  }
  return (
    <div className="card">
        <Link to={'/detail/' + dentist.id}>
        <img className="imgDoc" src='../public/images/doctor.jpg' alt="imgCardDoctor" />
        <div className="datosCard">
          <h3>{dentist.name}</h3>
          <h3>{dentist.username}</h3>
        </div>
      </Link>
          <button onClick={addFav} className="favButton"> {findFav ? '❤️' : '⭐'} </button>
    </div>
  );
};

export default Card;
