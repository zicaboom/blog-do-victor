import Contato from 'pages/Contato'
import Home from 'pages/Home'
import Sobre from 'pages/Sobre'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/sobre" exact>
                    <Sobre/>
                </Route>
                <Route path="/contato" exact>
                    <Contato/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes