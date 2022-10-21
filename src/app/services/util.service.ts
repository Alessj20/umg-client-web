import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    
    parseDate(value: string): Date {
        //2021-05-04T15:35:46Z[GMT]
        try {
            let aux1 = value.split("-");
            let aux2 = aux1[2].split("T");
            let aux3 = aux2[1].split(":");
            let cadena = aux1[0] + "-" + aux1[0] + "-";
            return new Date(Number(aux1[0]), Number(aux1[1]) - 1, Number(aux2[0]));
        } catch (error) {
            let date = new Date(parseInt(value));
            return new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
        }
    }
}