import { Component } from '@angular/core';
import { Router } from '@angular/router';

//written by Caroline Bischoping
// Dieser Kompoenente stellt den Header dar.

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles:[]
})
export class HeaderComponent {

  constructor(  private router: Router){}



  onNewRecipe(){

    //wenn der Button neues rezept gedrückt wird, wird auf die die rezepte Seite verwiesen

    this.router.navigate(['/rezepte','neu'])
  }


}