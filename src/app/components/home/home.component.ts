import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isRhino: boolean = false; 
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.isRhino().subscribe((val) => {
			this.isRhino = val;
    });
  }

}
