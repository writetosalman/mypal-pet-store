/**
 * This is the pet class
 * It holds all the pet attributes
 *
 */
export class Pet {

    constructor(
        public id:                  number,
        public breed:               string,
        public age:                 number,
        public name:                string,
        public price:               number,
        public list_date:           number,
        public sale_date:           number
    ) { }
}