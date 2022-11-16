import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input('items') items = [];
  isRhino:boolean = true;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  handleChange(event:any){
    event.checked ? this.isRhino = true : this.isRhino = false;
    this.globalService.setRhino(this.isRhino);
  }



}
