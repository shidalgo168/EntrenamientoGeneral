import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { read } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL_DATA = 'https://api.myjson.com/bins/uptto';
  private dataSource = new BehaviorSubject<any>({companies:[]});
  public currentData = this.dataSource.asObservable();
  private agents : any = {};
  

  constructor(private http: HttpClient) { }

  public getAgents() {
    const readAgents = this.http.get(this.URL_DATA);
    this.changeData(readAgents);
    readAgents.subscribe( data => this.agents = data );
    return readAgents;
  }

  public filterData(userInput) {
    userInput = userInput.toUpperCase();
    const filteredData = this.agents.companies.filter(agent => agent.name.toUpperCase().includes(userInput));
    this.changeData(filteredData);
  }

  public changeData(data: any) {
    this.dataSource.next(data);
  }
}
