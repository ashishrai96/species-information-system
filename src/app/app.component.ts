import { Component } from '@angular/core';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'est';
  loading: boolean = false;
  navItems = [
    { name: 'Home', route: 'home' },
    { name: 'Population', route: 'population' },
    { name: 'Analysis', route: 'analysis' },
    { name: 'Data', route: 'data' },
    { name: 'Community', route: 'community' },
    { name: 'References', route: 'ref' }
  ];

  date = new Date();
  
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.globalService.getLoading().subscribe((data) => {
      this.loading = data;
    });
  }
}
