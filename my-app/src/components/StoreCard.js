// src/components/StoreCard.js
import React from "react";

/**
 * store is Store.js store variable
 * deleteStoreFromDataBase is deleteStoreFromDataBase function in Store.js
 */
function StoreCard({store, deleteStoreFromDataBase}){

  function deleteStore(){
    deleteStoreFromDataBase(store.id);
  }

  const displayStores = store.toys.map (s => (
    <div>{s.name} =  ${s.price}</div>
  ))

  

  return (
    <div className="ui grid">
      <div className="ui column">
        <div className="ui card" key={store.id}>
          <div className="image">
              <img alt="oh no!" src={store.logo} />
          </div>
          <div className="content">
            <p>Store ID: {store.id}</p>
            <p>Name : {store.name}</p>
          </div>
          <div className="content">
            <div>List of avaiable Toys:</div>
            {displayStores}
          </div>
          <div className="ui primary button" onClick={() => deleteStore()}>Delete Store</div>
        </div>
      </div>
    </div>
  );
}


export default StoreCard;