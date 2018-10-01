import { Component, OnInit, HostListener, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { GridComponent } from '../grid/grid.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, AfterViewInit {
  

  agents$: any;
  @Input() grid: GridComponent;
  @Output() toggle: EventEmitter<null> = new EventEmitter();

  @ViewChild('searchText')
  public inputText: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAgents().subscribe(data => this.agents$ = data)
  }

  ngAfterViewInit(): void {
    console.log(this.inputText);
  }

  public keyUp(event: any): void {
    const filterValue = this.inputText.nativeElement.value;
    this.dataService.filterData(filterValue);
  }
  

}
