import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight, FaShoppingCart } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img height="101" src={logo} alt="logo" />
          <FaShoppingCart className="cart-icon-snipcart-checkout toggle-btn"></FaShoppingCart>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
