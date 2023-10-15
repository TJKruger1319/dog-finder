import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom";

function DogDetails({dog}) {

    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div>
            <p>{dog.name}</p>
            <p>{dog.age} years old</p>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Return</Link>
        </div>
    );
}

export default DogDetails;