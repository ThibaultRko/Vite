import React, { useState, useEffect } from "react";
import { MyNotationFunction } from "./MyNotationComponent";

export function PokemonData() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/900');
        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données ', error);
        setIsAvailable(false);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="grid">
      {isAvailable ? (
        pokemonList.map((pokemon) => (
          <div className="item" key={pokemon.id}>
            <h3 className="pokemonStyle">{pokemon.name}</h3>
            <p className="pokemonStyle">ID : {pokemon.id}</p>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        ))
      ) : (
        <h3>Contenu indisponible</h3>
      )}
    </div>
  );
}


  