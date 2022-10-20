import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/Client';
import { DataSingle } from '../model/Client';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  productURL = environment.apiResrURL + '/clients';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Data> {
    return this.httpClient.get<Data>(this.productURL);
  }

  public detail(id: string): Observable<DataSingle> {
    return this.httpClient.get<DataSingle>(this.productURL + `/${id}`);
  }

  public create(client: Client): Observable<any> {
    return this.httpClient.post<any>(this.productURL, client);
  }

  public update(id: string, client: Client): Observable<any> {
    return this.httpClient.put<any>(this.productURL + `/${id}`, client);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + `/${id}`);
  }
}
