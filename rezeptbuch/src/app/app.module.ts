import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RezeptComponent } from './rezept/rezept.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';
import { RecipeListComponent } from './rezept/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './rezept/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './rezept/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListAddComponent } from './einkaufsliste/shopping-list-add.component';
import { DropDownDirective } from './dropdown.directive';
import { ShoppingListService } from './einkaufsliste/shopping-list.service';
import { routing } from './app.routing';
import { RecipeStartComponent } from './rezept/recipe-start.component';
import { RecipeEditComponent } from './rezept/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './rezept/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezeptComponent,
    EinkaufslisteComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListAddComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
    
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
