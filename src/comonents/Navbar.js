import './Navbar.css';
import PropTypes from 'prop-types';
// import {BrowserRouter as Router,Link} from 'react-router-dom';





function Navbar(props)
{
   
    return(
        
        <> 
        
               <nav>
        <ul>
       <li className='patel' mode={props.mode}>{props.title}</li>
       <a href="@"><li className='home'>Home</li></a>
       {/* <a href="/about"><li  className='Aboutus' >About us</li></a> */}
        <li className='input'><input type='text' placeholder='search'></input></li>
        <li className='button'><button> SEARCH</button></li>
        
  
         </ul>
       
       </nav>
       
       
       
       
        
        </>
    );
    
}
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string
}


