// src/components/ToyCard.js
import React from "react";

/**
 * toy is Toy.js toy variable
 * deleteToyFromDataBase is deleteToyFromDataBase function in Toy.js
 */
function ToyCard({toy, deleteToyFromDataBase}){

  function deleteToy(){
    deleteToyFromDataBase(toy.id);
  }

  return (
    <div className="ui column">
      <div className="ui card" key={toy.id}>
        <div className="image">
          <img alt="oh no!" src={toy.logo} />
        </div>
        <div className="content">
          <p>Toy ID: {toy.id}</p>
          <p>Name : {toy.name}</p>
          <p>Type : {toy.toy_type}</p>
          <p>Price : ${toy.price}</p>
          <p>Rating : {toy.rating}</p>
          <p>company_ID: {toy.company_id}</p>
          <p>store_ID: {toy.store_id}</p>
        </div>
        <div className="ui two bottom attached buttons">
          <div className="ui primary button" onClick={() => deleteToy()}>Delete Toy</div>
        </div>
      </div>
    </div>
  );
}

export default ToyCard;