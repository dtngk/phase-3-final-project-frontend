// src/components/Store.js
import React, {useState, useEffect} from "react";
import StoreCard from "./StoreCard";
import StoreForm from "./StoreForm";

function Store() {

  /**
   * Localhost location for the database, where all the Stores are stored
   */
  const host = "http://localhost:9292/stores";

  /**
   * useState to hold all the stores
   */
  const [stores, setStores] = useState([]);

  /**
   * runs when the project starts, fetches all the Stores and put them
   * into the stores useState
   */
  useEffect(() =>{
      fetch(`${host}`)
      .then ((result) => result.json())
      .then ((data) => {
        const store = data.map((char) => (char));
        setStores(store);
      });
  }, [setStores]);

  /**
   * Deletes a store from the database
   */
  function deleteStoreFromDataBase(id){
    fetch(`${host}/${id}`, {
      method: "DELETE",
    })
    .then((reponse) => reponse.json())
    .then(() => {
      setStores(stores.filter((store) => store.id !== id))
    }); 
  } 

  /**
   * Adds a new store to the database
   */
  function addStoreToDataBase(store){
    fetch(`${host}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: store.name,
        logo: store.logo,
      }),
    })
  }

  const mall = stores.map(s => (
    <StoreCard key={s.id} store={s} deleteStoreFromDataBase={deleteStoreFromDataBase}/>
  ))

  return (
    <div>
      <StoreForm addStore={addStoreToDataBase}/>
      <p/>
      {mall}
    </div>

  )
}

export default Store;