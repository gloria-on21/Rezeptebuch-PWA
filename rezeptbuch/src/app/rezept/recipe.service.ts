import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../ingredient.model";
import { Recipe } from "./recipe.model";

// In diesem Services speichern wir unsere Rezepte in einem array und nutzen den Service um die Daten zu übertragen


export class RecipeService{
  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(){
    this.fetchData()

  }
    //In diesem array werden unsere Rezepte gespeichert.
    private recipes: Recipe[] = [
    new Recipe('Salat','lecker schmecka', 'https://image.essen-und-trinken.de/11950070/t/L8/v10/w1440/r1/-/gemischter-salat-mit-tomaten-und-pecannuessen-jpg--63869-.jpg',
    [
      new Ingridient('Tomate',1),
      new Ingridient('Gurke',1),
      new Ingridient('Salat',1)
  
    ]
    
    ),
    new Recipe('Schnitzel','lecker schmecka', 'https://image.essen-und-trinken.de/11955372/t/8b/v10/w960/r1/-/fjt201506-schnitzel-mit-knusperhuelle-jpg--66682-.jpg',
    [
      new Ingridient('Pommes',10),
      new Ingridient('Schitzel', 1)
    ]
    ),
  
    
  ];


  //Wir brauchen eine Methode mit der wir auf die Rezepte zugreifen können weil der Array privat ist.
  getRecipes(){
    return this.recipes;

  }

  getRecipe(id:number){
    return this.recipes[id];
  }
  deleteRecipe(id:number){
    this.recipes.splice(id, 1);
    this.storeData();

  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.storeData();
  }
  editRecipe(oldRecipe: Recipe, newRecipe:Recipe){

    this.recipes[this.recipes.indexOf(oldRecipe)]= newRecipe;
  }
  storeData(){
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
   

/* const body = JSON.stringify(this.recipes);
const headers = new HttpHeaders({'Content-Type': 'application/json'}); 
return this.http.put('https://rezepte-728a6-default-rtdb.firebaseio.com/recipe.json', body, {headers: headers}); */
  }
fetchData(){
  const storedRecipes = localStorage.getItem('recipes'); // liest die Rezepte aus dem localStorage aus
  if (storedRecipes) {
    this.recipes = JSON.parse(storedRecipes);
    this.recipesChanged.emit(this.recipes);
  }
}}


