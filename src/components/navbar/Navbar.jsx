import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  
  const handleSubmenuHover = () => {
    setNavbarVisible(true);
  };

  const handleSubmenuLeave = () => {
    setNavbarVisible(false);
  };  

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setNavbarVisible(false);
  };

  return (
    <div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""} `}>
      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul>
        <li className="menu-item">
          
        <Link to= "/SwiperMain" className="containerHome" >
          <a href="#"
          className="containerHome"
          onMouseOver={handleSubmenuHover}
          onMouseLeave={handleSubmenuLeave}
          >
            <svg 
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <path d="M9 22V12h6v10"></path>
            </svg>
            
          </a>
          <div className="submenu">
      {/* Aquí puedes agregar más elementos para tu submenú */}
      <Link to="/Main">Submenu 1</Link>
      <Link to="/submenu2">Submenu 2</Link>
    </div>
          </Link>
        </li>
        
        <li>
        <Link >
            {" "}
            <a href="#">
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>
          </Link>
        </li>
        <li>
        <Link to="/">
          <a href="#">
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071A9.969 9.969 0 0 0 12 2a9.969 9.969 0 0 0-7.071 2.929A9.969 9.969 0 0 0 2 12a9.969 9.969 0 0 0 2.929 7.071A9.969 9.969 0 0 0 12 22Z"></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                stroke="none"
                d="M12 5.5A1.25 1.25 0 1 1 12 8a1.25 1.25 0 0 1 0-2.5Z"
                clipRule="evenodd"
              ></path>
              <path d="M12.25 17v-7h-1"></path>
              <path d="M10.5 17H14"></path>
            </svg>
          </a>
          </Link>
        </li>
        <li>
        <Link>
          <a href="#">
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6.3h-3.006a.984.984 0 0 0-.984.983v3.45H18l-.584 3.8H14.01V21.5H9.623v-6.968H6v-3.798h3.576l.047-3.606-.007-.654A3.934 3.934 0 0 1 13.549 2.5H18v3.8Z"></path>
            </svg>
          </a>
          </Link>
        </li>
        <li>
        <div className="carrito">
        <Link to="/Acumulado" onClick={()=>handleLinkClick("/Acumulado")}>
      <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 6h20v4l-.7.42a3.5 3.5 0 0 1-3.6 0L17 10l-.7.42a3.5 3.5 0 0 1-3.6 0L12 10l-.7.42a3.5 3.5 0 0 1-3.6 0L7 10l-.7.42a3.5 3.5 0 0 1-3.6 0L2 10V6Z"></path>
  <path d="M4 11.244V22h16V11"></path>
  <path d="M4 5.911V2h16v4"></path>
  <path d="M14.5 16h-5v6h5v-6Z"></path>
</svg>
</Link>
    </div>
        </li>
      </ul>
     
        
    </div>
  );
};


export default Navbar;
