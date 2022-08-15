// src/components/Main.js
import React from "react";

function Main() {

  return (
    <div className="main">
      <h1 className="series">Company</h1>
      <p className="text">
        A Company is the maker of a Toy. It has a one-to-many relationship with Toys. You are able to add
        a new Company or delete an existing Company from the Database.

        A Company Database Structure looks like:
      </p>
        <p></p>
        <p>1) name (string)</p>
        <p>2) founding_year (integer)</p>
        <p>3) headquarters (string)</p>
        <p>4) logo (string)</p>

      <h1 className="series">Toy</h1>
      <p className="text">
        A Toy is made by only one Company and can be sold at many Stores. You are able to add
        a new Toy or delete an existing Toy from the Database and also modify the price and rating of an 
        existing Toy.
        A Toy Database Structure looks like:
      </p>
        <p>1) name (string) </p>
        <p>2) toy_type (string) </p>
        <p>3) rating (integer) </p>
        <p>4) price (integer) </p>
        <p>5) logo (string) </p>
        <p>6) company_id (integer) </p>
        <p>7) store_id (integer) </p>

      <h1 className="series">Store</h1>
      <p className="text">A Store can sell multiple toys. You are able to add
        a new Store or delete an existing Store from the Database.
        A Store Database Structure looks like: </p>
        <p>1) name (string) </p>
        <p>2) logo (string) </p>
    </div>   
  )
}

export default Main;