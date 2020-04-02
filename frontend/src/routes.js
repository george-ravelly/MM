import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Mangas from "./Mangas";
import Inicial from "./Inicial";
import Fav from "./Favoritos";
import Detalhes from "./Detalhes";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicial} />
                <Route path="/Mangas"  component={Mangas} />
                <Route path="/favoritos" component={Fav} />
                <Route path="/detalhes" component={Detalhes} />
            </Switch>
        </BrowserRouter>
    )
}