import { Routes, RouterModule } from "@angular/router";
import { EinkaufslisteComponent } from "./einkaufsliste/einkaufsliste.component";
import { RECIPE_ROUTES } from "./rezept/recipe.route";
import { RezeptComponent } from "./rezept/rezept.component";

const APP_ROUTES: Routes = [
    {path:'', redirectTo:'/rezepte', pathMatch: 'full'}, // Redirect zu der richtigen Seite, da am anfangs nur localhost aufgerufen wird.
    { path: 'rezepte', component: RezeptComponent, children: RECIPE_ROUTES},
    { path: 'einkaufsliste', component: EinkaufslisteComponent}
];

//Mit dieser Funktion werden die ROutes übergeben
export const routing = RouterModule.forRoot(APP_ROUTES)
//written by Carolin Bischoping 
