import './Header.css'

interface IHeader{
    title: string 
}
const Header = ({title}: IHeader) => {
    return(
        <>
            <div className="headerContainer">
                <h1 className="title">{title}</h1>
            </div>
        </>
    )
}

export default Header