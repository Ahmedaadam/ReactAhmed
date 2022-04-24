
import './Search-box.styles.css'

const SearchBox = ({filterHandler}) => {
   return(
      <div className="input-search-container" >
         <input type="search" placeholder="Sök" onChange={filterHandler} />

      </div>
   )
}
export default SearchBox;