import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  providers: [RecipeService]
})
export class RezeptComponent implements OnInit {


  ngOnInit() {
    
  }


}
