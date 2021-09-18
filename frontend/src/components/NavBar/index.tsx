import './NavBar.css'

const NavBar = () => {
    return(
        <>
            <div className = "navContainer">
                <div className="logoContainer">
                    <img src="https://source.unsplash.com/random/75x75" alt="Logo" />
                </div>
                <div className = "links">
                    <a href = " ">
                        Home
                    </a>
                    <a href = " ">
                        Contato
                    </a>
                    <a href = " ">
                        Sobre
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar