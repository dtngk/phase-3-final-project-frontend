// src/components/ToyForm.js
import React from "react";
import {useState} from "react";

function ToyForm({addToy, updateToy}){
    const [name, setName] = useState("");
	const [toy_type, setToyType] = useState("");
	const [addRating, setAddRating] = useState("");
    const [addPrice, setAddPrice] = useState("");
    const [editRating, setEditRating] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [logo, setLogo] = useState("");
    const [company_id, setCompanyID] = useState("");
    const [store_id, setStoreID] = useState("");
    const [id, setID] = useState("")

  function handleAddToy(event) {

    event.preventDefault();

    if((name !== "") && (toy_type !== "") && (addRating !== "") && (addPrice != "") 
        && (logo !== "") && (company_id != "") && (store_id) != ""){
        const newToy = {
            name: name,
            toy_type: toy_type,
            rating: addRating,
            price: addPrice,
            logo: logo,
            company_id: company_id,
            store_id: store_id
        };

        addToy(newToy);

        resetAll();
      }
    }

    function handleEditToy(event){

        event.preventDefault();

        if ((editPrice !== "") && (editRating !== "")){
            const newToy = {
                id: id,
                rating: editRating,
                price: editPrice,
            }

            updateToy(newToy);

            resetAll();
        }
    }

    function resetAll(){
        setName("");
        setToyType("");
        setAddRating("");
        setAddPrice("");
        setLogo("");
        setCompanyID("");
        setStoreID("");
        setEditRating("");
        setEditPrice("");
        setID("");
    }

    function handleNameClick(event){
        setName(event.target.value);
    }

    function handleToyTypeClick(event){
        setToyType(event.target.value);
    }

    function handleAddRatingClick(event){
        setAddRating(event.target.value);
    }

    function handleAddPriceClick(event){
        setAddPrice(event.target.value);
    }

    function handleLogoClick(event){
        setLogo(event.target.value);
    }

    function handleCompanyIDClick(event){
        setCompanyID(event.target.value);
    }

    function handleStoreIDClick(event){
        setStoreID(event.target.value);
    }

    function handleIDClick(event){
        setID(event.target.value);
    }

    function handleEditRatingClick(event){
        setEditRating(event.target.value);
    }

    function handleEditPriceClick(event){
        setEditPrice(event.target.value);
    }

    const toy = (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="five fields">

                    <div className="field" >
                        <label>Name</label>
                        <input placeholder="Name" type="text" value={name} onChange={handleNameClick}/>
                    </div>

                    <div className="field" >
                        <label>Toy Type</label>
                        <input placeholder="Toy Type" type="text" value={toy_type} onChange={handleToyTypeClick}/>
                    </div>

                    <div className="field" >
                        <label>Rating</label>
                        <input placeholder="Rating" type="number" value={addRating} onChange={handleAddRatingClick}/>
                    </div>

                    <div className="field" >
                        <label>Price</label>
                        <input placeholder="Price" type="number" value={addPrice} onChange={handleAddPriceClick}/>
                    </div>

                    <div className="field"  >
                        <label>Logo URL</label>
                        <input placeholder="Logo URL" type="text" value={logo} onChange={handleLogoClick}/>
                    </div>

                    <div className="field"  >
                        <label>Company</label>
                        <input placeholder="Company" type="text" value={company_id} onChange={handleCompanyIDClick}/>
                    </div>

                    <div className="field"  >
                        <label>Store</label>
                        <input placeholder="Store" type="text" value={store_id} onChange={handleStoreIDClick}/>
                    </div>

                <div className="ui submit button" onClick={handleAddToy}>Add Toy</div>
            </div>
        </div>
    </div>
  );

  const editToy = (
    <div className="ui inverted segment">
        <div className="ui inverted form">
            <div className="five fields">

            <div className="field" >
              <label>Toy ID</label>
              <input placeholder="Toy ID" type="text" value={id} onChange={handleIDClick}/>
            </div>
            
            <div className="field" >
              <label>Rating</label>
              <input placeholder="Rating" type="text" value={editRating} onChange={handleEditRatingClick}/>
            </div>

            <div className="field" >
              <label>Price</label>
              <input placeholder="Price" type="number" value={editPrice} onChange={handleEditPriceClick}/>
            </div>
                <div className="ui submit button" onClick={handleEditToy}>Edit Toy</div>
            </div>
        </div>
    </div>
 );


  return (
    <div>
        {toy}
        {editToy}
    </div>
  )
}

export default ToyForm;