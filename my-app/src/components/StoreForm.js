// src/components/StoreForm.js
import React from "react";
import {useState} from "react";

function StoreForm({addStore}){
    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");

  function handleSubmit(event) {

   // event.preventDefault();

    if((name !== "") && (logo !== "")){
      const newStore = {
          name: name,
          logo: logo,
        };

        addStore(newStore);

        resetAll();
      }
    }

    function resetAll(){
        setName("");
        setLogo("");
    }

    function handleNameClick(event){
        setName(event.target.value);
    }

    function handleLogoClick(event){
        setLogo(event.target.value);
    }

    const store = (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="five fields">

                    <div className="field" >
                        <label>Name</label>
                        <input placeholder="Name" type="text" value={name} onChange={handleNameClick}/>
                    </div>

                    <div className="field"  >
                        <label>Logo URL</label>
                        <input placeholder="Logo URL" type="text" value={logo} onChange={handleLogoClick}/>
                    </div>

                <div className="ui submit button" onClick={handleSubmit}>Add New Store</div>
            </div>
        </div>
    </div>
  );

  return (
    <div>
        {store}
    </div>
  )
}

export default StoreForm;