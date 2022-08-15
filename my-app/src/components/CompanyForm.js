// src/components/CompanyForm.js
import React from "react";
import {useState} from "react";

function CompanyForm({addCompany}){
    const [name, setName] = useState("");
	const [year, setYear] = useState("");
	const [headquarters, setHeadquarters] = useState("");
    const [logo, setLogo] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    if((name !== "") && (year !== "") && (headquarters !== "") && (logo !== "")){
      const newCompany = {
          name: name,
          founding_year: year,
          headquarters: headquarters,
          logo: logo
        };

        addCompany(newCompany);

        resetAll();
      }
    }

    function resetAll(){
        setName("");
        setYear("");
        setHeadquarters("");
        setLogo("");
    }

    function handleNameClick(event){
        setName(event.target.value);
    }

    function handleYearClick(event){
        setYear(event.target.value);
    }

    function handleHeadquartersClick(event){
        setHeadquarters(event.target.value);
    }

    function handleLogoClick(event){
        setLogo(event.target.value);
    }

    const company = (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="five fields">

                    <div className="field" >
                        <label>Name</label>
                        <input placeholder="Name" type="text" value={name} onChange={handleNameClick}/>
                    </div>

                    <div className="field" >
                        <label>Founding Year</label>
                        <input placeholder="Founding Year" type="number" value={year} onChange={handleYearClick}/>
                    </div>

                    <div className="field" >
                        <label>Headquarters</label>
                        <input placeholder="Headquarters" type="text" value={headquarters} onChange={handleHeadquartersClick}/>
                    </div>

                    <div className="field"  >
                        <label>Logo URL</label>
                        <input placeholder="Logo URL" type="text" value={logo} onChange={handleLogoClick}/>
                    </div>

                <div className="ui submit button" onClick={handleSubmit}>Add New Company</div>
            </div>
        </div>
    </div>
  );

  return (
    <div>
        {company}
    </div>
  )
}

export default CompanyForm;