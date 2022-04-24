import logo from './logo.svg';
import {useEffect, useState} from 'react'
import SearchBox from './components/SearchBox/search-box.components';
import Card from './components/Card/Card.component';
import Navigation from './components/Navigation/Navigation.component';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home.component';
import Team from './components/Team/Team.component';

const dataImage = [];
function App() {

 const [pokemons, setPokemons] = useState([]);
 const [filteredPokemons, setFilteredPokemons] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');

  // https://pokeapi.co/api/v2/pokemon?offset=40&limit=40

  //1: Detta är ett tillvägagångsätt för att kalla på en extern API
 
  useEffect( () => {
   fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
  .then(response => response.json())
  .then(pokemons => {setPokemons(pokemons.results);
   });
  
  },[])

  

useEffect(() => {
  if(pokemons.length > 0) {
    setFilteredPokemons(pokemons);
  }
},[pokemons])
  


  const filterHandler = (event) => {
     const data =  event.target.value.toLowerCase();;
     const newPokemon =   pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
     setFilteredPokemons(newPokemon);
     setSearchTerm(data);
     
    //  const mew = filteredPokemons.filter(pokemon => pokemon.name == data);
    //  console.log();
  }

  return (
    <div className="App">
      {/* <input type="search" placeholder="Sök" onChange={filterHandler}/> */}

      <Routes>
         <Route path="/" element={<Navigation/>}>
            <Route path="/Card" element={<Card pokemons={filteredPokemons}/>}>
                   <Route index element={<SearchBox filterHandler={filterHandler}/>}> </Route>
            </Route>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Team" element={<Team/>}/>
         </Route>
         
       </Routes>
       {/* <Card pokemons={filteredPokemons} /> */}
       {/* <SearchBox filterHandler={filterHandler}/> */}
      
       
      {/* {
        filteredPokemons.map(pokemon => <div>{pokemon.name}</div>)
      } */}

      {/*1: Vi ska lägga till i min pokemon lista  minst 3*/}
      {/*2:Vi ska ta bort fråm  min pokemon lista  */}
      {/* 3: Vi ska kunna ersätta deras namn med nytt smeknamn */}

      {/* Varje pokemon har bild */}
     
    </div>
  );
}

export default App;
