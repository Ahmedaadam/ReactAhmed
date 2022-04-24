import {useState, createContext} from 'react'


export const TeamContext = createContext({
    team:[],
    setTeam: () => null
})

export const TeamProvider = ({children}) => {

    const [team, setTeam] = useState([]);
    const value = {team, setTeam};
     return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}

