import { Ingridient } from "../ingredient.model";

export class ShoppingListService {
    private ingredients:Ingridient[] = [];

    getIngredients(){
        return this.ingredients;
    }

    addIngredients(ingredients: Ingridient[]){
        Array.prototype.push.apply(this.ingredients, ingredients);


    }

    addIngredient(ingredient: Ingridient){
        this.ingredients.push(ingredient);
        this.storeData();
    }

    deleteIngredient(ingredient:Ingridient){

        this.ingredients.splice(this.ingredients.indexOf(ingredient),1);


    }

    editIngredient(oldIngredient: Ingridient | null, newIngredient: Ingridient){
        if ( oldIngredient !== null){
        this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;}

    }
    storeData(){
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    }
    fetchData(){
        const storedRecipes = localStorage.getItem('ingredients'); // liest die Rezepte aus dem localStorage aus
        if (storedRecipes) {
          this.ingredients = JSON.parse(storedRecipes);
        }
      }
    
    }
       
    
    
