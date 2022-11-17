import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
	selector: 'app-analysis',
	templateUrl: './analysis.component.html',
	styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
	lineStylesData: any;
	basicOptions: any;
	text: any;
	colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#800000", "#808000", "#008000", "#800080", "#008080", "#000080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333"];

	illegalTrading: any = [];
	trophyHunting: any = [];
	poaching: any = [];
	showPieChart: boolean = false;
	pieOptions: { plugins: { legend: { display: boolean; }; }; };

	constructor(private globalService: GlobalService) { }

	ngOnInit(): void {
		console.log(this.colors.length);
		this.lineStylesData = {
			labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
			datasets: [
				{
					label: 'Botswana',
					borderColor: '#42A5F5',
					data: [300, 330, 400, 400, 400, 400, 400, 400, 0]
				},
				{
					label: 'Cameroon',
					borderColor: '#66BB6A',
					data: [80, 80, 80, 80, 80, 80, 80, 80, 0]
				},
				{
					label: 'Gabon',
					borderColor: '#FFA726',
					data: [50, 50, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					label: 'Mozaambique',
					borderColor: '#FF7043',
					data: [40, 40, 60, 100, 100, 100, 100, 100, 100]
				},
				{
					label: 'Namibia',
					borderColor: '#AB47BC',
					data: [90, 90, 90, 90, 90, 90, 90, 90, 90]
				},
				{
					label: 'South Africa',
					borderColor: '#78909C',
					data: [100, 100, 150, 150, 150, 150, 150, 150, 150]
				},
				{
					label: 'Tanazania',
					borderColor: '#42A5F5',
					data: [200, 200, 200, 200, 200, 200, 200, 100, 100]
				},
				{
					label: 'Zambia',
					borderColor: '#66BB6A',
					data: [20, 20, 20, 20, 80, 80, 0, 0, 80]
				},
				{
					label: 'Zimbabwe',
					borderColor: '#FFA726',
					data: [500, 500, 500, 500, 500, 500, 500, 500, 500]
				}
			]
		};

		this.pieOptions = {
			plugins: {
				legend: {
					display: false
				}
			},
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

		this.globalService.isRhino().subscribe((res: any) => {
			if(res){
				this.fetchData(res);
			}
			else{
				this.fetchData(res);
			}
		});
	}

	fetchData(isRhino){
		this.globalService.getIllegalTrading(isRhino).subscribe((data: any) => {
			if (data) {
				this.populateData(data, 'trading');
			}
		});

		this.globalService.getTrophyHunting(isRhino).subscribe((data: any) => {
			if (data) {
				this.populateData(data, 'hunting');
			}
		});

		this.globalService.getPoaching(isRhino).subscribe((data: any) => {
			if (data) {
				this.populateData(data, 'poaching');
			}
		});
	}

	populateData(data, category) {
		let resp = [];
		for (let key in data) {
			let temp = { "content": [], "data": {} };
			temp["content"] = data[key]["content"];
			temp["data"] = {
				labels: [...data[key].x],
				datasets: []
			};

			for (let y of data[key].y) {
				let subtemp = {
					label: y.name,
					type: y.type,
					data: y.data,
				};

				let idx = Math.round(Math.random() * this.colors.length);
				if (y.type == "line") {
					subtemp["borderColor"] = this.colors[idx];
				}
				else if (y.type == "bar") {
					subtemp["backgroundColor"] = this.colors[idx];
				}
				else if (y.type == "pie") {
					subtemp["backgroundColor"] = [];
					for(let i = 0; i < y.data.length; i++){
						subtemp["backgroundColor"].push(this.colors[i]);
					}

					this.showPieChart = true;
				}

				temp["data"]["datasets"].push(subtemp);
			}

			resp.push(temp);
		}

		setTimeout(() => {
			if (category == 'trading')
				this.illegalTrading = resp;
			else if (category == 'hunting')
				this.trophyHunting = resp;
			else if (category == 'poaching')
				this.poaching = resp;
		}, 0);
	}

}
