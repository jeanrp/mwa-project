export class CustomerModel {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    type: string;
    address: {
        street: string,
        city: string,
        state: string,
        zipcode: string
    };
    proposals: {
        _id: string,
        description: string,
        proposalDate: string,
        vehicle_ads_id: string,
        customer_seller_id: string
    };
    vehicles_ads:[{
        _id:string,
        interestType:string,
        category:string,
        vin:string,
        odometer:number,
        model:string,
        brand:string
        condition:string,
        fuel:string
        color:string,
        transmission:string,
        year:number,
        description:string,
        price:number,
        title:string,
        creationDate:string,
        sellDate:Date,
        customer_seller_id:string
    }];

}
