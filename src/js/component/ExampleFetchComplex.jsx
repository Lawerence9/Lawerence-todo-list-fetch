import React, { useEffect, useState } from "react";


export const ExampleFetchComplex = () => {
    const [characters, setCharacters] = useState([])
    const base_Url = "https://swapi.tech/api"

    const getCharacters = async () => {
        const uri = `${base_Url}/people`
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options)
        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
            return;
        }
        const data = await response.json()
        console.log(data);
        setCharacters(data.results)
    }


    useEffect(() => { getCharacters(), [] })

    return (
        <div className="container">
                <ul className="list-group">
                    {characters.map((iterator) =>
                        <li key={iterator.uid} className="list-group-item">{iterator.name} </li>)}
                </ul>
        </div>
    )
}