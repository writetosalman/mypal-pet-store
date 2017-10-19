/**
 * This is the Pet Service
 * It connects with the XML API to get the data
 *
 */
import { Injectable }               from '@angular/core';
import { Router }                   from '@angular/router';
import { Headers, Http }            from '@angular/http';

import { Pet }                      from './pet';

import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {

    private petUrl    = 'http://localhost:8000/api/';  // URL to web api
    private headers   = new Headers({'Content-Type': 'application/json'});

    // constructor so that we can get instance of http & router
    constructor(
        private http: Http,
        private _router: Router
    ) { }

    /**
     * This function gets all the pets from the database
     *
     * @returns         {Observable<R>}
     */
    getPets() : Observable<Pet[]> {

        return this.http.get(this.petUrl + 'pets')
                // .map() is a transformer that will transform the result to whatever you return (in your case .json()) before it's passed to the callback
                // here we map the response.json to Pet array
                .map(response => response.json() as Pet[]);
    }

    /**
     * This function get details about a single pet from database
     * @param id        number
     * @returns         {Observable<R>}
     */
    getPet(id: number): Observable<Pet> {

        const url = this.petUrl + 'pet/' + id;

        return this.http.get(url)
            .map(response => response.json() as Pet);
    }

    /**
     * This function deletes a single pet from the database
     * @param id        number
     * @returns         {Observable<R>}
     */
    deletePet(id: number): Observable<Pet> {

        const url = this.petUrl + 'pet/' + id;

        return this.http.delete(url, {headers: this.headers})
            .map(response => response.json() as Pet);
    }

    /**
     * This is the function to edit a single pet from database
     * @param petId     number
     * @param pet       pet object
     * @returns         {Observable<R>}
     */
    editPet(petId: number, pet: Pet): Observable<Pet> {
        //console.log('editPet', JSON.stringify(pet));

        return this.http
          .put(this.petUrl + 'pet/' + petId, JSON.stringify(pet), {headers: this.headers})
          .map(response => response.json() as Pet);
    }

    /**
     * This is the function to add a pet to the database
     * @param   frm     FormData
     * @returns         {Observable<R>}
     */
    addPet(frm: FormData): Observable<Pet> {
      return this.http
          .post(this.petUrl + 'pet', frm)
          .map(response => response.json() as Pet);
    }
}
