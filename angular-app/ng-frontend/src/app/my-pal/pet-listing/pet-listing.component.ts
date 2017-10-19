/**
 * This is the component to get all the pets and pass to child PetListComponent to draw list
 *
 */
import { Component, OnInit }  from '@angular/core';
import { PetService }         from '../pet.service';
import { Pet }                from '../pet';

@Component({
  selector:     'app-pet-listing',
  templateUrl:  './pet-listing.component.html',
})
export class PetListingComponent implements OnInit {

    public pets:    Pet[]    = [];
    public loading: boolean  = false;
    public errorMsg:string   = '';

    constructor(private _petService: PetService) {

      this.loading = false;
      this.errorMsg= '';
    }

    /**
     * All heavy lifting is done on the ngOnInit and not in construction.
     * Get all the pets
     *
     */
    ngOnInit() {
        // start loading
        this.loading = true;

        this._petService.getPets().subscribe(
                (success: any) => {                         // success json, if returned with http response status 200
                    this.pets       = success;
                    this.loading    = false;
                    // console.log('getPets()', this.pets);
                },
                (error: any) => {                           // error json if returned with other http response status
                    var res = JSON.parse(error._body);
                    this.pets       = [];
                    this.errorMsg   = res.error;
                    this.loading    = false;
                    // console.log('getPets()', this.errorMsg);
                },
                () => {                                     // always called once completed
                    this.loading    = false;
                }
            );
    }

}
