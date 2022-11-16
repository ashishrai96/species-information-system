import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
	selector: 'app-population',
	templateUrl: './population.component.html',
	styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

	isRhino: boolean = false;
	populationMethods: any[] = [];
	graphs = [];

	constructor(private globalService: GlobalService) { }

	ngOnInit(): void {
		this.globalService.isRhino().subscribe((val) => {
			this.isRhino = val;

			if(this.isRhino){
				this.populationMethods = [
					"The population is calculated by the respective authorities through different methods such as camera trapping, dung analysis, manual counting, etc. The calculation is based on the exponential model, 𝑁𝑡 = 𝑁0𝑒𝑟𝑡 .",
					"For our analysis, we have created a Polynomial Regression model, which fits the data that is present in a polynomial function and then predicts the output based on the input that is given.",
					"R2 (coefficient of determination) score is the amount of the variation in the output. It is used to check how well-observed results are reproduced by the model, depending on the ratio of total deviation of results described by the model.",
					"For calculating the Accuracy of the model, we have used the RMSE(Root Mean Squared Error) of the model. The idea is to measure how bad the model’s predictions are when compared to actual observed values."
				];

				this.globalService.getRhinoGraph().subscribe((val) => {
					if (val) {
						for(let id in val){
							this.populateGraphs(val[id]);
							break;
						}
					}
				});
			}
			else{
				this.populationMethods = [
					"To analyze and understand the population trends of elephants, the report covers four regions in Asia and four regions in Africa, which has been mentioned already. In Asia, generally two types of counting methods have been adopted namely, camera trapping and dung analysis. Based on sightings in camera traps and indirect estimation methods, elephant count is calculated. Also, in recent years, techniques like analyzing the dung samples have also been deployed to estimate birth rates and population trends in elephants.",
					"In the figures, the population trends have been shown and also the predicted value that could be the possible count of the elephants have been estimated. The prediction model is based on a polynomial regression model. For each graph, to understand the accuracy of the curve, the root-mean-square error and the respective R2-score have been provided.",
				];

				this.globalService.getElephantGraph().subscribe((val) => {
					if (val) {
						for(let id in val){
							this.populateGraphs(val[id]);
							break;
						}
					}
				});
			}
		});
	}

	populateGraphs(arr) {
		let temp = [];
		for(let item of arr){
			temp.push(
				{
					title: item.title,
					estimate: {
						labels: item.estimate.x,
						datasets: [
							{
								label: 'Model Predicted',
								borderColor: '#E54343',
								data: item.estimate.y_pred,
								borderDash: [5, 5]
							},
							{
								label: 'Estimated',
								borderColor: '#42A5F5',
								data: item.estimate.y_est
							}
						]
					},
					predict: {
						labels: item.predict.x,
						datasets: [
							{
								label: 'Prediction',
								borderColor: '#00bb7e',
								data: item.predict.y
							}
						]
					}
				}
			);
		}

		this.graphs = temp;
	}
}
