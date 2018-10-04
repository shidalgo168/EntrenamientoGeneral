import { Component, OnInit, HostBinding} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private agents: any = {};


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAgents().subscribe(data => this.agents = data);
    this.data.currentData.subscribe(
      data => this.agents.companies = data
    );
  }

}
