import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex(){

  const [searchTerm, setSeacrchTerm] = useState('');
    return(
        <div className='pokedex-wrapper'>
          <h1>Pokedex</h1>
          <Search updateSearchTerm={setSeacrchTerm}/>
          {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList/>}
        </div>
    )
}

export default Pokedex;