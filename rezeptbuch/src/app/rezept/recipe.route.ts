import {  Routes } from "@angular/router";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start.component";

export const RECIPE_ROUTES: Routes =  [

    { path: '', component: RecipeStartComponent},
    { path: 'neu', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailsComponent},
    { path: ':id/bearbeiten', component: RecipeEditComponent}

    
];