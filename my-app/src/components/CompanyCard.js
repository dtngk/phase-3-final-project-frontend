// src/components/CompanyCard.js
import React from "react";

/**
 * company is Company.js company variable
 * deleteCompanyFromDataBase is deleteCompanyFromDataBase function in Company.js
 */
function CompanyCard({company, deleteCompanyFromDataBase}){

  function deleteCompany(){
    deleteCompanyFromDataBase(company.id);
  }

  return (
    <div>
      <div className="ui grid">
        <div className= "ui column">
          <div className="ui card" key={company.id}>
            <div className="image">
              <img alt="oh no!" src={company.logo} />
            </div>
            <div className="content">
              <p>Company ID: {company.id} </p>
              <p>Name: {company.name}</p>
              <p>Founding Year: {company.founding_year}</p>
              <p>Headquarters: {company.headquarters}</p>
              <div className="content">
              </div>
            </div>
            <div className="ui primary button" onClick={() => deleteCompany()}>Delete Company</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;