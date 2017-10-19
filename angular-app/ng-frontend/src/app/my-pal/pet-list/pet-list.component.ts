import { Component, OnInit, Input } from '@angular/core';
import { PetService }               from '../pet.service';
import { Pet }                      from '../pet';

@Component({
  selector:     'app-pet-list',
  templateUrl:  './pet-list.component.html',
})
export class PetListComponent implements OnInit {

    @Input() pet:   Pet;
    @Input() pets:  Pet[];

    public lblDelete: string;
    public errorMsg:  string;

    constructor(private _petService: PetService) {
        this.lblDelete = 'Delete';
    }

    ngOnInit() {
    }

    /**
     * This function handles the Delete form submit event
     * @returns {boolean}
     */
    public handleDelete() {
        //console.log('handleDelete()', this.pets);

        this.lblDelete = 'Deleting';

        this._petService.deletePet(this.pet.id).subscribe(
            (success: any) => {                         // success json, if returned with http response status 200
              this.lblDelete  = 'Deleted';
              //console.log('Pet', this.pet);

              // Remove from array
              setTimeout (() => {
                this.removeDeletePet(this.pet.id);
              }, 400);
            },
            (error: any) => {                           // error json if returned with other http response status
              console.log('getPet() Error: ', error);

              if ( error.status === 0 ) {
                this.errorMsg = 'Unknown error happened while connecting to api.';
              }
              else {
                var res = JSON.parse(error._body);
                this.errorMsg   = res.error;
              }
            }
        );
        return false;
    }

    /**
     * This is the internal function. It updates the Pets array and remove the deleted one
     * @param id
     */
    private removeDeletePet(id: number) {
        const index = this.pets.map(function(e) {
            return e.id;
        }).indexOf(id);

        if (index !== -1) {
            this.pets.splice(index, 1);
        }
    }

}
