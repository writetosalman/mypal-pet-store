import { Component, OnInit, Input }               from '@angular/core';
import {FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule }       from '@angular/forms';
import { ActivatedRoute, Params }                 from '@angular/router';
import { Location }                               from '@angular/common';
import { PetService }                             from '../pet.service';
import { Pet }                                    from '../pet';

@Component({
  selector:     'app-pet-edit',
  templateUrl:  './pet-edit.component.html',
})
export class PetEditComponent implements OnInit {

    private petId:      number;
    private pet:        Pet;

    public loading:    boolean;
    public errorMsg:   string;
    public successMsg  = '';
    public isBtnPressed=false;

    // FormBuilder
    public salForm;

    // Form Fields
    breed:      AbstractControl;
    age:        AbstractControl;
    name:       AbstractControl;
    price:      AbstractControl;
    listDate:   AbstractControl;
    saleDate:   AbstractControl;

    constructor(
      private _petService:      PetService,
      private _fb:              FormBuilder,
      private _route:           ActivatedRoute,
      private _location:        Location
    ) {
      this.loading      = false;
      this.isBtnPressed = false;
      this.errorMsg     = '';

      // Add some validation
      this.salForm = this._fb.group({
        'breed':    ['', Validators.required],
        'age':      ['', Validators.required],
        'name':     [''],
        'price':    ['', Validators.required],
        'listDate': ['', Validators.required],
        'saleDate': [''],
      });


      // We assign this.name after we’ve created Form with the FormBuilder
      this.breed    = this.salForm.controls['breed'];
      this.age      = this.salForm.controls['age'];
      this.name     = this.salForm.controls['name'];
      this.price    = this.salForm.controls['price'];
      this.listDate = this.salForm.controls['listDate'];
      this.saleDate = this.salForm.controls['saleDate'];
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
     * This function gets a pet from the xml api
     * @param id        number
     *
     */
    private getPet(id: number) {

        this.loading = true;

        // Get pet details from api
        this._petService.getPet(id).subscribe(
            (success: any) => {                         // success json, if returned with http response status 200
              this.loading    = false;
              this.pet        = success as Pet;
              console.log('getPet', this.pet);

              // now we have got the pet object build the form
              this.setFormValues();
            },
            (error: any) => {                           // error json if returned with other http response status
              console.log('getPet() Error: ', error);

              if ( error.status === 0 ) {
                this.errorMsg = 'Unknown error happened while connecting to api.';

              } else {
                const res = JSON.parse(error._body);
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
     * This function saves value to the formBuilder from the pet object
     */
    private setFormValues() {

        const strListDate = new Date(this.pet.list_date).toISOString().slice(0, 16);
        const strSaleDate = this.pet.sale_date ? new Date(this.pet.sale_date).toISOString().slice(0, 16) : '';

        // We assign this.name after we’ve created ksForm with the FormBuilder
        this.salForm.controls['breed'].setValue(this.pet.breed);
        this.salForm.controls['age'].setValue(this.pet.age);
        this.salForm.controls['name'].setValue(this.pet.name);
        this.salForm.controls['price'].setValue(this.pet.price);
        this.salForm.controls['listDate'].setValue(strListDate);
        this.salForm.controls['saleDate'].setValue(strSaleDate);
    }

    /**
     * This function is used to handle the GO BACK event
     */
    public goBack() {
        this._location.back();
    }

    /**
     * This is the function that handles the submit event for the Edit form
     * @param  frm      any
     */
    public onSubmitEdit(frm: any): void {
        // console.log('Edit Form submitted with values', frm);
        // console.log('Single value', frm.breed);

        if ( frm.breed === '' ) {
          this.errorMsg = 'Breed is required. Cannot be empty.';
          return;
        }

        this.isBtnPressed = true;
        this.errorMsg     = '';
        this.successMsg   = '';

        // Setup put data
        this.pet.breed      = frm.breed;
        this.pet.age        = frm.age;
        this.pet.name       = frm.name;
        this.pet.price      = frm.price;
        this.pet.list_date  = frm.listDate;
        this.pet.sale_date  = frm.saleDate;

        // Call the service for login
        this._petService.editPet(this.petId, this.pet).subscribe(
            (success: any) => {                           // success json, if returned with http response status 200
              this.pet       = success as Pet;
              this.successMsg= 'Pet edited successfully';
            },
            (error: any) => {                             // error json if returned with other http response status
              var res = JSON.parse(error._body);
              // console.log(res.error);
              this.errorMsg   = res.error;
            },
            () => {                                       // always called once completed
                this.isBtnPressed = false;
            }
        );
    }
}
