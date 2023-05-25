import logo from "../../assets/logo.png"

function Navbar() {
    return ( 
        <nav>
            <img src={logo} alt="logo" />

            <ul className="nav-links">
                <li>Home</li>
                <li>Pages</li>
                <li>Contacts</li>
                <li>Blog</li>
                <li>Landing</li>
            </ul>

            <ul className="reg">
                <li>Log In/Registration</li>
                <li></li>
                <li>Book Table</li>
            </ul>
        </nav>
     );
}

export default Navbar;