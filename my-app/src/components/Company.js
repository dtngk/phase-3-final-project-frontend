// src/components/Company.js
import React, {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard";
import CompanyForm from "./CompanyForm";

function Company() {

  /**
   * Localhost location for the database, where all the Companies are stored
   */
  const host = "http://localhost:9292/companies";

  /**
   * useState to hold all the companies
   */
  const [companies, setCompanies] = useState([]);

  /**
   * runs when the project starts, fetches all the companies and stores them
   * into the companies useState
   */
  useEffect(() =>{
      fetch(`${host}`)
      .then ((result) => result.json())
      .then ((data) => {
        const company = data.map((c) => (c));
        setCompanies(company);
      });
  }, [setCompanies]);

  /**
   * Deletes a company from the database
   */
  function deleteCompanyFromDataBase(id){
    fetch(`${host}/${id}`, {
      method: "DELETE",
    })
      .then((reponse) => reponse.json())
      .then(() => {
        setCompanies(companies.filter((company) => company.id !== id))
      }); 
  } 

  /**
   * Adds a new Company to the database
   */
  function addCompanyToDataBase(company){
    fetch(`${host}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: company.name,
        founding_year: company.founding_year,
        headquarters: company.headquarters,
        logo: company.logo,
      }),
    });

    setCompanies(companies => [...companies, company]);
  }

  const business = companies.map(c => (
      <CompanyCard key={c.id} company={c} deleteCompanyFromDataBase={deleteCompanyFromDataBase}/>
  ))

  return (
    <div>
      <CompanyForm addCompany={addCompanyToDataBase}/>
      <p/>
      {business}
    </div>
  )
}

export default Company;