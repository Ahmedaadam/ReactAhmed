import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
// import Home from "../Home/Home.component";
// import Team from "../Team/Team.component";
import './Navigation.styles.css'

const Navigation = () => {
    return(
        <Fragment>

        <div className="links-container">
           <Link to="Home">Home</Link>
           <Link to="Team">Lag</Link>
           <Link to="Card">Lista</Link>
        </div>
           <Outlet/>
        </Fragment>
    )
  }
  export default Navigation;