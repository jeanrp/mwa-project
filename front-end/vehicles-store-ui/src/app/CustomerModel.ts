export class CustomerModel {
    _id: string;
    firstName: String;
    lastName: String;
    phoneNumber: Number;
    email: string;
    password: string;
    type: String;
    address:{
        street: string;
        city: string;
        state: string
        zipcode: number;
    }
}