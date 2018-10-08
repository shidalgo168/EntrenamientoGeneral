import { Component, OnInit, HostListener, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, AfterViewInit {
  

  @ViewChild('searchText')
  public inputText: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
  }

  ngAfterViewInit(): void {
  }

  public keyUp(event: any): void {
    const filterValue = this.inputText.nativeElement.value;
    if (filterValue.length >= 3) {
      this.dataService.filterData(filterValue);
    }
    else{
      this.dataService.undoFilter();
    }
  }
  
  public lensClick(): void {
    const filterValue = this.inputText.nativeElement.value;
    this.dataService.filterData(filterValue);
  }

}
