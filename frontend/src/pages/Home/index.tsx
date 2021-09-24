import Footer from "components/Footer"
import Header from "components/Header"
import NavBar from "components/NavBar"
import Posts from "components/Posts"

const Home = () => {
    return (
        <>
            <NavBar />
            <Header title="Home" />
            <Posts/>
            <Footer />
        </>
    )
}

export default Home