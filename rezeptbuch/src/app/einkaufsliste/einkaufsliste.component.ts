import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-einkaufsliste',
  templateUrl: './einkaufsliste.component.html',
})
export class EinkaufslisteComponent implements OnInit {
  ingredients: Ingridient[] = [];
  selectedIngredient!: Ingridient | null ;

  constructor (private sls: ShoppingListService){
  }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();

  }

  onSelectItem(ingredient:Ingridient){
    this.selectedIngredient = ingredient;

  }

  onCleared(){
    this.selectedIngredient = null;
  }

}


//written by Carolin Bischoping 
