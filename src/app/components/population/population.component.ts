import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  isRhino: boolean = false;
  elephantsMethods:any[] = [];
  graphs = [];

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.isRhino().subscribe((val) => {
      this.isRhino = val;
    });

    this.elephantsMethods = [
      "To analyze and understand the population trends of elephants, the report covers four regions in Asia and four regions in Africa, which has been mentioned already. In Asia, generally two types of counting methods have been adopted namely, camera trapping and dung analysis. Based on sightings in camera traps and indirect estimation methods, elephant count is calculated. Also, in recent years, techniques like analyzing the dung samples have also been deployed to estimate birth rates and population trends in elephants.",
      "In the figures, the population trends have been shown and also the predicted value that could be the possible count of the elephants have been estimated. The prediction model is based on a polynomial regression model. For each graph, to understand the accuracy of the curve, the root-mean-square error and the respective R2-score have been provided.",
    ];

    this.graphs = [
      {
        title: "Elephant Population in Asia",
        estimate: {
          labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015],
          datasets: [
            {
              label: 'Botswana',
              borderColor: '#42A5F5',
              data: [300,330,400,400,400,400,400,400,0]
            }
          ]
        },
        predict: {
          labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015],
          datasets: [
            {
              label: 'Botswana',
              borderColor: '#42A5F5',
              data: [300,330,400,400,400,400,400,400,0]
            }
          ]
        }
      }
    ];
  }

}
