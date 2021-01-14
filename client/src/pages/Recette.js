import React from 'react';
import { NavLink } from "react-router-dom";

const Details = props => {
    const { name, ingredients, desc, steps } =
    (props.data) || {};

    console.log(props.data)


    return (
      <div>
        <NavLink to="/" activeClassName="active">
          Go Back
        </NavLink>
        <div className="form-details">
          <div>
            <strong>Nom:</strong> {name/*||cocktail*/}
          </div>
          <div>
            <strong>Ingredients:</strong> {ingredients/*||data["ingredients"]*/}
          </div>
          <div>
            <strong>Description:</strong> {desc/*|| data["desc"]*/}
          </div>
          <div>
            <strong>Étapes:</strong> {steps/*|| data["steps"]*/}
          </div>
        </div>
      </div>
    );
  }

export default Details;