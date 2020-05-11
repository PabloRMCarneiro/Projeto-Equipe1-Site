import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
import Estoque from './pages/Estoque/Estoque'
import Novos_produtos from './pages/Novos_produtos/Novos_produtos'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login"  exact component = {Login}/>
                <Route path="/registro"  exact component = {Registro}/>
                <Route path="/estoque"  exact component = {Estoque}/>
                <Route path="/novos_produtos"  exact component = {Novos_produtos}/>
            </Switch>
        </BrowserRouter>
    )
}

