import './Header.css'
const Titulo = () => {
    return(
        <>
            <div className="headerContainer">
                <h1 className="title">Blog do virto</h1>
                <div className = "fotoContainer">
                    <img src="https://source.unsplash.com/random/400x400" alt="Foto" />
                </div>
            </div>
        </>
    )
}

export default Titulo