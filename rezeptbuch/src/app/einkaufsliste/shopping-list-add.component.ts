import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingridient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
})
export class ShoppingListAddComponent  implements OnChanges{
  @Input()
  selectedIngredient!: Ingridient | null;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService ){
  }

  onSubmit(form: NgForm){
    const newIngredient = new Ingridient(form.value.name,form.value.amount);
    if(!this.isAdd){

      this.sls.editIngredient(this.selectedIngredient, newIngredient)


    }
    else{
      this.sls.addIngredient(newIngredient);
    }

    this.onClear(form);
  }

  onClear(form: NgForm){
    this.cleared.emit();
    form.resetForm();

  }

  ngOnChanges(changes: any) {

    if (changes.selectedIngredient.currentValue== null){
      this.selectedIngredient = {name: null, amount:null};
      this.isAdd= true;
    }
    else{
      this.isAdd= false;

    }
  }
  onDelete(form: NgForm){

    if (this.selectedIngredient !== null){

    this.sls.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
    }
  }
}