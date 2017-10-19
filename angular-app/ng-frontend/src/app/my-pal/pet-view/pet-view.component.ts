/**
 * This component is used to draw a single pet view
 *
 */
import { Component, OnInit, Input }               from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';
import { Location }                               from '@angular/common';
import { PetService }                             from '../pet.service';
import { Pet }                                    from '../pet';

@Component({
  selector:     'app-pet-view',
  templateUrl:  './pet-view.component.html',
})
export class PetViewComponent implements OnInit {

    public petId:    number;
    public pet:      Pet;

    public loading:  boolean;
    public errorMsg: string;

    constructor(
        private _petService:      PetService,
        private _route:           ActivatedRoute,
        private _location:        Location
    ) {
        this.loading = false;
        this.errorMsg= '';
    }

    ngOnInit() {

        // Get pet id
        this._route.params.forEach((params: Params) => {
            this.petId = params['id'];
            console.log('Pet ID '+this.petId);
            this.getPet(this.petId);
        });

    }

    /**
     * This is the function that get a single pet and display in view
     * @param id        Number
     */
    private getPet(id: number) {

        this.loading = true;

        // Get pet details from api
        this._petService.getPet(id).subscribe(
            (success: any) => {                         // success json, if returned with http response status 200
                this.loading    = false;
                this.pet        = success as Pet;
                console.log('Pet', this.pet);
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
                this.loading    = false;
            },
            () => {                                     // always called once completed
                this.loading    = false;
            }
        );
    }

    /**
     * This function is used to handle the GO BACK event
     */
    public goBack() {
        this._location.back();
    }

}
