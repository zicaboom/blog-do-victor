import Footer from "components/Footer"
import Header from "components/Header"
import NavBar from "components/NavBar"
import "./Contato.css"

const Contato = () => {
    return (
        <>
            <NavBar />
            <Header title="Contato" />
            <div className="contactContainer">
                <address>Victor Monteiro de Oliveira</address>
                <address><a href="procontato.victor@gmail.com" target="_blank" rel="noreferrer">procontato.victor@gmail.com</a></address>
                <p>(19)992680436</p>
            </div>
            <Footer />
        </>
    )
}

export default Contato