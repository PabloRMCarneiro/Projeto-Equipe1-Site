import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
import Estoque from './pages/Estoque/Estoque'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login"  exact component = {Login}/>
                <Route path="/registro"  exact component = {Registro}/>
                <Route path="/estoque"  exact component = {Estoque}/>
            </Switch>
        </BrowserRouter>
    )
}
//<Route path="/estoque"  exact component = {Estoque}/>
