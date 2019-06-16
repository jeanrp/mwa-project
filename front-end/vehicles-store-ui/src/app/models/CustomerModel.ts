export class CustomerModel {
    _id: string;
    firstName: String;
    lastName: String;
    phoneNumber: String;
    email: String;
    password: String;
    type: String;
    address:{
        street: String;
        city: String;
        state: String
        zipcode: String;
    }
}