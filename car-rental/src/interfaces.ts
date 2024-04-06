export  interface loginInterface{
    email: string;
    password: string;
}


export interface registerInterface{
    email: string;
    password: string;
}

export interface carInterface{
        "id": string;
        "brand": string;
        "model": string;
        "year": number;
        "color": string;
        "price": number;
        "transmission": string;
        "seats": number,
        "details": Details;   
        "isRented": {
            "user": string | User;
            "period": string;
        }
}

interface Details{
    "engine": string;
    "fuelType": string;
    "mileage": number;
    "condition": string;
    "description": string;
    "image": string;
}

export interface User{
    id: string;
    email: string;
    license: string;
}