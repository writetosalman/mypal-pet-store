import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { PetComponent }             from './my-pal/pet.component';
import { PetViewComponent }         from './my-pal/pet-view/pet-view.component';
import {PetEditComponent}           from "./my-pal/pet-edit/pet-edit.component";
import {PetAddComponent}            from "./my-pal/pet-add/pet-add.component";

const routes: Routes = [
    { path: '',             redirectTo: 'pets',         pathMatch:  'full' },
    { path: 'pets',         component: PetComponent },
    { path: 'pets/add',     component: PetAddComponent },
    { path: 'pet/:id',      component: PetViewComponent },
    { path: 'pet/:id/edit', component: PetEditComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}