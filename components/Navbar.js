import {menuList } from "../data"
import iconLinkMenu from "./iconLinkMenu"
import logo from "./logo"
import menuNavbar from "./menuNavbar"


const Navbar = () => {
  return `
  <nav id="navbar-example2" class="navbar navbarFixded px-3 mb-3">
     <div class="container-fluid">
          <div>${logo()}</div>          
          <ul class="nav nav-pills menu-header">  
            ${menuNavbar()}
          </ul>  
         <div class="icon-header"> ${iconLinkMenu()}</div>
      </div>
  </nav>  
  
  

  `
}

export default Navbar

