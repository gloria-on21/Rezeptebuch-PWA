import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
selector: 'app-recipe-edit',
templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy{
recipeForm!: FormGroup ;
private recipeIndex!: number;
private subscription!: Subscription;
private isNew =true;
private recipe!: Recipe | null;
//Subscription um die Paramaeter zu verfolgen
constructor(private recipeService: RecipeService,
private router: Router,
private route: ActivatedRoute){

}
ngOnDestroy(){
this.subscription.unsubscribe();
}

ngOnInit() {
    
    

this.subscription = this.route.params.subscribe(
params =>{
if(params.hasOwnProperty('id')){
this.isNew = false;
this.recipeIndex = +params['id'];
this.recipe = this.recipeService.getRecipe(this.recipeIndex);

}
else{
this.isNew = true;
this.recipe = null;
}
}
);

let recipeName= null;
let recipeImagePath = null;
let recipeDescription = null;
let recipeIngredients = new FormArray([]);
//joa das laden funktioniert nicht ganz aber das funktioniert nicht wirklich weil ich keinen FormArray einfach so übergeben kann

//Wenn wir nicht in den isnew Modus sind werden die Daten überschrieben
if(!this.isNew){
if(this.recipe?.hasOwnProperty('ingredients')){
for (let ingredient of this.recipe.ingridients){
recipeIngredients.push( new FormGroup({
'name': new FormControl(ingredient.name, Validators.required),
'amount': new FormControl(ingredient.amount, Validators.required)
}));



}

}
recipeName = this.recipe?.name;
recipeImagePath = this.recipe?.imagePath
recipeDescription = this.recipe?.description
}




}

onSubmit(){
const newRecipe = this.recipeForm.value;
if(this.isNew){
this.recipeService.addRecipe(newRecipe)
}
else {
this.recipeService.editRecipe(this.recipeIndex, newRecipe)
}
this.onNavigateBack();
}

onCancel(){
this.onNavigateBack();

}
onNavigateBack(){
this.router.navigate(['/'])


}
onAddIngredientControl(name: string, amount: string){
(<FormArray>this.recipeForm.get('ingredients')).push(
new FormGroup({
'name': new FormControl(name, Validators.required),
'amount': new FormControl(amount, Validators.required),

})

);

}
onRemoveIngredientControl(index: number){
(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)

}
}

// written by Laura