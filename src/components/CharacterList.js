import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterListStyling = styled.div`
background-image: url(https://images.pexels.com/photos/1265952/pexels-photo-1265952.jpeg?cs=srgb&dl=bright-close-up-colors-1265952.jpg&fm=jpg);
display: flex;
justify-content: center;
`

export default function CharacterList() {

  const [Character, setCharacter] = useState([]);
  const [initialCharacter, setInitialCharacter] = useState([]);
  
  useEffect(() => {

      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response  => {
      setCharacter(response.data.results)
      
      setInitialCharacter(response.data.results)
      console.log(response);
      }, [])
  
      .catch(error => {
          console.log("Error", error);
      })
    }, []);

    const filterName = event => {
      let items = initialCharacter;
      items = items.filter(item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
      setCharacter(items);
    }

  return (
    <CharacterListStyling>
    <SearchForm onSearch={filterName} />
    <section className="character-list">
      {Character.map((character) =>
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          image={character.image}
          />
          )}
    </section>
    </CharacterListStyling>
  );
}