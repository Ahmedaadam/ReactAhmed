import {useState, useContext, useEffect} from 'react';
import { TeamContext } from '../../context/team.context';
import './Team.styles.css'

const Team = () => {

    const {team,setTeam} = useContext(TeamContext);
      const [nameChanged, setNameChanged] = useState('');
      const [nameItem, setNameItem] = useState('');


    const formHandler =  (e) => {

        e.preventDefault();
       const pokiId =   e.target[1].name;
       const pokiName = e.target[0].value;
       console.log(e);
        // console.log(pokiId);

        
        //Find index of specfic object using FirstIndex metod
        
       
            let objIndex = team.findIndex((obj => obj.id == pokiId));
            //1: 
            let temp_state = [...team]
            let temp_element = {...team[objIndex]};
             
            temp_element.name= e.target[0].value;
    
            temp_state[objIndex] = temp_element;
            setTeam(temp_state);

            // let objPokemon=  team.find(obj => obj.id == pokiId);
            //  let temp_Obj = {...objPokemon};
            //  let 
            //  for(var i = 0; i < team.length; i++) {
            //      if(team[i].id == objPokemon.id) {
            //          objPokemon.name = e.target[0].value;
            //          team[i] = objPokemon;
            //      }
            //  }
            //  setTeam()


            // console.log(objPokemon);
            



        

        //
        //Update objects name property
        //team[objIndex].name = "Ahmed"
    
        
        //setTeam(team[objIndex].name = "Ahmed" );
     
        // console.log(objIndex);
    }

    const removeHandler = (e) => {
        e.preventDefault();
        // Hitta pokemon som finns i listan som motsvarar detta nman
        const name = e.target.name;
        console.log(name)
        // // console.log(name);
        const pokemon =  team.filter(pokemon => pokemon.name != name);

        // // console.log(pokemon);
        setTeam(pokemon);

        console.log("We removed an object");

    }



    const changeNameHandler = (e) => {
        e.preventDefault();
        const pokiId = e.target.name;
        console.log(e.target);
           
        let objIndex = team.findIndex((obj => obj.id == pokiId));
        //1: 
        let temp_state = [...team]
        let temp_element = {...team[objIndex]};
         
        temp_element.name= nameItem;

        temp_state[objIndex] = temp_element;
        setTeam(temp_state);
        
    }

    const nameHandler = (e) => {
        e.preventDefault();
        setNameItem(e.target.value);
      
    }

   
    return(
        <div className="team-container">  
            <h1>Welcome to my Team</h1>
         <div className="Card-container">
            {team.map(({id,name,url})=> (
                <form className="form-container">
                  <div >
                    
                    <img src={url}/>
                    <div>
                        {
                        nameChanged ? (<div>{nameChanged}</div>) : (<div>{name}</div>)
                        }</div>
                    <input name={name} onChange={nameHandler}   type="search" placeholder='Change Name'  />
                    <button name={id} onClick={changeNameHandler}>Press me to change name</button>
                    <button name={name}  onClick={removeHandler}>Ta bort</button>
                     </div>
                    </form>
            ))}
           </div>
        </div>
    )

}
export default Team;


