import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
//import { DataStoreService } from 'src/app/services/data-store.service';
//import { ProductsService } from 'src/app/services/pro

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  { 
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {   
  }

}
