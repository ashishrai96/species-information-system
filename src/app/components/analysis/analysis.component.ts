import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  lineStylesData: any;
  basicOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.lineStylesData = {
      labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015],
      datasets: [
        {
          label: 'Botswana',
          borderColor: '#42A5F5',
          data: [300,330,400,400,400,400,400,400,0]
        },
        {
          label: 'Cameroon',
          borderColor: '#66BB6A',
          data: [80,80,80,80,80,80,80,80,0]
        },
        {
          label: 'Gabon',
          borderColor: '#FFA726',
          data: [50,50,0,0,0,0,0,0,0]
        },
        {
          label: 'Mozaambique',
          borderColor: '#FF7043',
          data: [40,40,60,100,100,100,100,100,100]
        },
        {
          label: 'Namibia',
          borderColor: '#AB47BC',
          data: [90,90,90,90,90,90,90,90,90]
        },
        {
          label: 'South Africa',
          borderColor: '#78909C',
          data: [100,100,150,150,150,150,150,150,150]
        },
        {
          label: 'Tanazania',
          borderColor: '#42A5F5',
          data: [200,200,200,200,200,200,200,100,100]
        },
        {
          label: 'Zambia',
          borderColor: '#66BB6A',
          data: [20,20,20,20,80,80,0,0,80]
        },
        {
          label: 'Zimbabwe',
          borderColor: '#FFA726',
          data: [500,500,500,500,500,500,500,500,500]
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          },
          max: 600,
          min: 0
        }
      },
      elements: {
        point: {
          backgroundColor: "#42A5F5",
          hoverBackgroundColor: "#42A5F5aa",
          radius: 5,
          pointStyle: "circle",
          hoverRadius: 15,
        }
      }
    };

  }

}
