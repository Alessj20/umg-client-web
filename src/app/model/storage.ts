export interface StorageData {
    data: Storage;
}


export class Storage {
    url: string;
    filename: string;
    clientId: string;
    _id?: string;
    createdAt?: Date;
    updatedAt?: string

    constructor(
        url: string,
        filename: string,
        clientId: string,
        _id: string,
        createdAt: Date,
        updatedAt: string
    ) {
        this.url = url,
            this.filename = filename,
            this.clientId = clientId,
            this._id = _id,
            this.createdAt = createdAt,
            this.updatedAt = updatedAt
    }
}
