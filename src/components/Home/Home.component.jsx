import backgroundImage from './pika.png'
import './Home.styles.css'
const Home = () => {
  return(
       
      <div className="head">
         <h1 className="home-title">Välkommen till start sidan</h1> 
         <img className='image' src={backgroundImage}/>

      </div>
  )
}
export default Home;