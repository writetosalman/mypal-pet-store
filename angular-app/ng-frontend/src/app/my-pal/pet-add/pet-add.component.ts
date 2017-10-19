import { Component, OnInit }                      from '@angular/core';
import { Location }                               from '@angular/common';
import {FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule }       from '@angular/forms';
import { PetService }                             from '../pet.service';
import { Pet }                                    from '../pet';

@Component({
  selector:     'app-pet-add',
  templateUrl:  './pet-add.component.html',
})
export class PetAddComponent implements OnInit {

    public pet          = new Pet(0, '', 0, '', 0, 0, 0);
    public errorMsg     = '';
    public successMsg   = '';
    public loading      = false;
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
        private _location:        Location
    ) {

      // Get current date
      const strDate  = new Date().toISOString().slice(0, 16);
      //console.log('Date', strDate);

      // Add some validation
      this.salForm = _fb.group({
            'breed':    ['', Validators.required],
            'age':      ['', Validators.required],
            'name':     [''],
            'price':    ['', Validators.required],
            'listDate': ['', Validators.required],
            'saleDate': [''],
      });


      // We assign this.name after we’ve created ksForm with the FormBuilder
      this.breed    = this.salForm.controls['breed'];
      this.age      = this.salForm.controls['age'];
      this.name     = this.salForm.controls['name'];
      this.price    = this.salForm.controls['price'];
      this.listDate = this.salForm.controls['listDate'];
      this.saleDate = this.salForm.controls['saleDate'];
    }

    ngOnInit() {
    }

    /**
     * This function handles the SUBMIT BUTTON event
     * @param frm       any
     *
     */
    public onSubmit(frm: any): void {
          // console.log('Form submitted with values', frm);
          // console.log('Single value', frm.breed);

          if ( frm.breed === '' ) {
              this.errorMsg = 'Breed is required. Cannot be empty.';
              return;
          }

          this.loading      = true;
          this.errorMsg     = '';
          this.successMsg   = '';

          // Setup form data
          let formData  = new FormData();
          formData.append('breed',      frm.breed);
          formData.append('age',        frm.age);
          formData.append('name',       frm.name);
          formData.append('price',      frm.price);
          formData.append('list_date',  frm.listDate);      // @todo Salman make sure date is converted fine
          formData.append('sale_date',  frm.saleDate);

          // Call the service for login
          this._petService.addPet(formData).subscribe(
              (success: any) => {                           // success json, if returned with http response status 200
                  this.pet       = success as Pet;
                  this.successMsg= 'Pet added to store successfully';
              },
              (error: any) => {                             // error json if returned with other http response status
                  var res = JSON.parse(error._body);
                  //console.log(res.error);
                  this.errorMsg   = res.error;
                  this.loading    = false;
              },
              () => {                                       // always called once completed
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
