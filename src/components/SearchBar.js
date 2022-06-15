import React, {useState} from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
    const [search, setSearch] = useState("dito")
    const {pokemon, setPokemon} = useState()
    const onChangehandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonCLickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
    
    
        }
    return (
        <div className="searchbar-container"> 
            <div className="searchbar">
                <input placeholder="Nome ou Id do pokemon" onChange={onChangehandler} />
                
            </div>
            <div className="searchbar-button">
                <button onClick={onButtonCLickHandler}> Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.fronts_default} alt={pokemon.name}/>
                </div>
            ) : null}
        </div>
    )
}

export default SearchBar;