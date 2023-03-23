import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RezeptComponent } from './rezept/rezept.component';
import { RecipeDetailsComponent } from './rezept/recipe-details/recipe-details.component';
import { RecipeAddedComponent } from './rezept/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './rezept/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezeptComponent,
    RecipeDetailsComponent,
    RecipeAddedComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
