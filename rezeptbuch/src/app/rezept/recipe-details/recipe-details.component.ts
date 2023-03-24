import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/einkaufsliste/shopping-list.service';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
selector: 'app-recipe-details',
templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit, OnDestroy{
//Auch hier
selectedRecipe!: Recipe;
recipeId!: number;
private subscription!: Subscription;

ngOnInit() {
this.subscription =this.activatedRoute.params.subscribe(
params => {
this.recipeId = +params['id'];
this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);}
);
}
constructor(
private recipeService: RecipeService,
private sls: ShoppingListService,
private activatedRoute: ActivatedRoute,
private router: Router ){

}

//Mit dieser Funktion sollen die Zutaten von dem aktuellen Rezept auf eine Einkaufsliste gepusht werden

onAddToList(){

this.sls.addIngredients(this.selectedRecipe.ingridients);
this.router.navigate(['/einkaufsliste'])

}

onEdit(){

this.router.navigate(['/rezepte',this.recipeId,'bearbeiten'])

}
onDelete(){

this.recipeService.deleteRecipe(this.recipeId);
this.router.navigate(['/rezepte'])
}

ngOnDestroy() {
this.subscription.unsubscribe();

}
}

// written by Laura