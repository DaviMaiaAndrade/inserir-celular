import { AllAccountsRoutes } from "Feactures/account/constants/routes";
import { AllAcounts } from "Feactures/account/pages/AllAcounts/AllAcounts";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export const Router:React.FC=()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AllAccountsRoutes.allaccountsroutes} component={AllAcounts}/>
            </Switch>
        </BrowserRouter>
    )
}