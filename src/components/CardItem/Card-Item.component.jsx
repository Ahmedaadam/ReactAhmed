import React, { useEffect, useState, useContext} from 'react'
import { TeamContext } from '../../context/team.context';
import { imageHandler } from '../Team/Team.component';
import './Card-item.styles.css'

const CardItem = ({pokemon, teamId}) => {
  const [poke, setPoke] = useState([]);
  const [image, setImage] = useState([]);
  const [test, setTest] = useState([])
  const {name} = pokemon;
  const {team,setTeam} = useContext(TeamContext)
  // console.log(name);
  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
     
      setImage({dataImage:data.sprites.front_default, dataId:data.id})
     
    }
      );
  },[])

  // console.log(image)

   
  
  // console.log(teamId.id)

   const addHandler =  (e) => {
     e.preventDefault();
     const pokiname = pokemon.name;
     const pokiId = e;
     console.log(pokiId)
     console.log(pokemon.name);
    //  console.log(image);
 
     setTest([...test, {name:'hello', imageUrl:'image'}])
      setTeam([...team, {id:image.dataId, name: pokiname, url:image.dataImage}])
      console.log(team);
   
    
  }

    const removeHandler = (e) => {
      e.preventDefault();
      const pokiname = e.target.name;
      console.log(e);
      const newPokimon = team.filter(p =>  p.name != pokiname);
            
      
      setTeam(newPokimon);
    }
  //  console.log(image.dataId);
    return (
  
    <div key={image.dataId} className="card">
      <form>
      {/* pokemon.name, image */}
        <h2>{pokemon.name}</h2>
           <img name={image.dataImage} src={image.dataImage} />
        <div className="buttons">
            <button onClick={addHandler}>Lägg till </button>
            <button name={pokemon.name} onClick={removeHandler}>Ta bort </button>
        </div>
       </form>
    </div>
  )
}

export default CardItem