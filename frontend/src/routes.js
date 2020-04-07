import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicial from "./Inicial";
import Login from "./Login";
import Detalhes from "./Detalhes";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/inicial" component={Inicial} />
                <Route path="/detalhes/:id_manga" component={Detalhes} />
            </Switch>
        </BrowserRouter>
    )
}