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
    }

    deleteIngredient(ingredient:Ingridient){

        this.ingredients.splice(this.ingredients.indexOf(ingredient),1);


    }
    editIngredient(oldIngredient: Ingridient | null, newIngredient: Ingridient){
        if ( oldIngredient !== null){
        this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;}

    }
}