import './Infos.css'
const Infos = () => {
    return (
        <>
            <div className="contactContainer">
                <h1>Victor Monteiro de Oliveira</h1>
                <div className="email">
                    <p>Email:</p>
                    <address>
                        <a href="procontato.victor@gmail.com" target="_blank" rel="noreferrer">
                            procontato.victor@gmail.com
                        </a>
                    </address>
                </div>
                <div className="github">
                    <p>Github:</p>
                    <address>
                        <a href="https://github.com/zicaboom/" target="_blank" rel="noreferrer">
                            github.com/zicaboom
                        </a>
                    </address>
                </div>
                <div className="linkedin">
                    <p>Linkedin:</p>
                    <address>
                        <a href="https://www.linkedin.com/in/victor-monteiro-a374301b9/" target="_blank" rel="noreferrer">
                            linkedin.com/in/victor-monteiro-a374301b9
                        </a>
                    </address>
                </div>
                <div className="telefone">
                    <p>Telefone:</p><address>(19)992680436</address>
                </div>
            </div>
        </>
    )
}

export default Infos