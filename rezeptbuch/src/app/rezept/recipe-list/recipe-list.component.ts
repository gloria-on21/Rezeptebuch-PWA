import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
selector: 'app-recipe-list',
templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit{

recipes: Recipe[] | undefined;

constructor(private recipeService: RecipeService) {}
//ngOnit ist für initialisierungsdaten gut, hier wollen wir unsere dummy werte der Rezepte als initialisierungsdaten haben. demeentsprechend verwenden wir hier unseren rezepte service
ngOnInit(){

this.recipes = this.recipeService.getRecipes();
this.recipeService.recipesChanged.subscribe(
(recipes: Recipe[])=> this.recipes = recipes
);

}

}

// written by Laura