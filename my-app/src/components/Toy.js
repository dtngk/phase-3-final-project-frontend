// src/components/Toy.js
import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";
import ToyForm from "./ToyForm";

function Toy() {

  /**
   * Localhost location for the database, where all the Toys are stored
   */
  const host = "http://localhost:9292/toys";

  /**
   * useState to hold all toys
   */
  const [toys, setToys] = useState([]);

  /**
   * runs when the project starts, fetches all the toys and stores them into the toys useState
   */
  useEffect(() =>{
      fetch(`${host}`)
      .then ((result) => result.json())
      .then ((data) => {
        const toy = data.map((t) => (t));
        setToys(toy);
      });
  }, [setToys]);

  /**
   * Deletes a toy from the database
   */
  function deleteToyFromDataBase(id){
    fetch(`${host}/${id}`, {
      method: "DELETE",
    })
      .then((reponse) => reponse.json())
      .then(() => {
        setToys(toys.filter((toy) => toy.id !== id))
      }); 
  } 

  function addToyToDataBase(toy){
    console.log(toy.logo)
    fetch(`${host}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: toy.name,
        toy_type: toy.toy_type,
        rating: toy.rating,
        price: toy.price,
        logo: toy.logo,
        company_id: toy.company_id,
        store_id: toy.store_id
      }),
    });

    setToys(toys => [...toys, toy]);
  }

  /**
   * Edits a Toy in the database
   */
  function updateToyInDatabase(toy){
    fetch(`${host}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: toy.price,
        rating: toy.rating,
      }),
    })

    setToys(toys => [...toys, toy]);
  }


  const game = toys.map(t => (
    <ToyCard key={t.id} toy={t} deleteToyFromDataBase={deleteToyFromDataBase}/>
  ))

  return (
    <div>
      <ToyForm addToy={addToyToDataBase} updateToy={updateToyInDatabase}/>
      <div className="ui four column grid">
        <p/>
        {game}
      </div>
    </div>
  )
}

export default Toy;