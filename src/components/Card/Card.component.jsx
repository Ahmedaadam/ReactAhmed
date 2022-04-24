import {useState, useEffect, Fragment, useContext} from 'react'
import CardItem from '../CardItem/Card-Item.component'
import { Outlet } from 'react-router-dom'
import { TeamContext } from '../../context/team.context'
import './Card.styles.css'

const Card = ({pokemons}) => {

  const {team} = useContext(TeamContext);

  console.log(team);
  //fix the id

  return (
    <Fragment>
      <Outlet/>
    <div className="card-container">

        {pokemons.map(pokemon => <CardItem teamId={team}  pokemon={pokemon}/>)}
    </div>
    </Fragment>

  )
}

export default Card