import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRacipesPage from "../pages/AddRacipesPage/AddRacipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/header";

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exect path="/login">
                    <LoginPage/>
                </Route>
                <Route exect path="/cadastro">
                    <SignUpPage/>
                </Route>
                <Route exect path="/">
                    <RecipesListPage/>
                </Route>
                <Route exect path="/adcionar-receita">
                    <AddRacipesPage/>
                </Route>
                <Route exect path="/detalhe/:id">    
                    <RecipeDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router