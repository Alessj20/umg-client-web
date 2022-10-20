export interface Data {
    data: [Client];
}

export interface DataSingle {
    data: Client;
}


export class Client {
    _id?: string;
    name: string;
    birthday: Date;
    gender: string;
    dpi: number;
    address: string;
    nit: number;
    phone: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(
        name: string,
        birthday: Date,
        gender: string,
        dpi: number,
        address: string,
        nit: number,
        phone: number,
        createdAt?: Date,
        updatedAt?: Date,
        _id?: string
        ) {
        this._id = _id,
            this.name = name,
            this.birthday = birthday,
            this.gender = gender,
            this.dpi = dpi,
            this.address = address,
            this.nit = nit,
            this.phone = phone,
            this.createdAt = createdAt,
            this.updatedAt = updatedAt
    }
}
