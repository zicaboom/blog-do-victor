import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <>
            <div className = "navContainer">

                    <div className="logoContainer">
                        <Link to = '/'>
                            <h2>Blog do <span>VICTOR_</span> </h2>
                        </Link>
                    </div>
                <div className = "links">
                    <Link to = '/'>
                        Home
                    </Link>
                    <Link to = '/sobre'>
                        Sobre
                    </Link>
                    <Link to = '/contato'>
                        Contato
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar