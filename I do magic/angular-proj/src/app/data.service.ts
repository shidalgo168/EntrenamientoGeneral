import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_DATA = 'https://api.myjson.com/bins/uptto';

  constructor(private http: HttpClient) { }

  public getAgents() {
    return this.http.get(this.URL_DATA);
  }
}
