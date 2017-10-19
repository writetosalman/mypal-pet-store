import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule, ReactiveFormsModule }
                                    from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { AppRoutingModule }         from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent }             from './app.component';
import { PetComponent }             from './my-pal/pet.component';
import { PetService }               from './my-pal/pet.service';
import { PetListingComponent }      from './my-pal/pet-listing/pet-listing.component';
import { PetAddComponent }          from './my-pal/pet-add/pet-add.component';
import { PetListComponent }         from './my-pal/pet-list/pet-list.component';
import { PetViewComponent }         from './my-pal/pet-view/pet-view.component';
import { PetEditComponent }         from './my-pal/pet-edit/pet-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListingComponent,
    PetAddComponent,
    PetListComponent,
    PetViewComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
