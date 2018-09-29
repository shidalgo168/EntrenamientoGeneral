import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  agents$: Array<Object>;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAgents().subscribe(
      data => this.agents$ = data.companies
    )
  }

  myFilter = (userInput) => {
    userInput = userInput.toUpperCase();
    return this.agents$.filter(agent => agent.name.toUpperCase().includes(userInput));
  }
}
