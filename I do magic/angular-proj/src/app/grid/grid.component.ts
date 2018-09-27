import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  agents$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAgents().subscribe(
      data => this.agents$ = data
    )
  }

}
