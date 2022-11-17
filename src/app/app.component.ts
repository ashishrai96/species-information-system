import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'est';
  navItems = [
    { name: 'Home', route: 'home' },
    { name: 'Population', route: 'population' },
    { name: 'Analysis', route: 'analysis' },
    { name: 'Data', route: 'data' },
    { name: 'Community', route: 'community' },
    { name: 'References', route: 'ref' }
  ];

  date = new Date();
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
