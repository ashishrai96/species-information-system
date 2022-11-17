import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	constructor(private globalService: GlobalService) { }
	tables = [];
	cols: any[];
	currentObject:any;

	ngOnInit(): void {
		console.log("jkh")
		this.globalService.isRhino().subscribe((data) => {
			if (data) {
				this.populateRhinoData();
			}
			else {
				this.populateElephantsData();
			}
		});

		this.cols = [
			{ field: 'year', header: 'Year' },
			{ field: 'est', header: 'Total Estimated' },
			{ field: 'pred', header: 'Total Predicted' }
		];
	}

	populateRhinoData() {
		this.globalService.getRhinoGraph().subscribe((resp: any[]) => {
			let val;
			for(let key in resp){
				val = resp[key];
				this.currentObject = val;
				break;
			}

			if (val.length > 0) {
				let temp = [];
				for (let data of val) {
					let obj = [];
					for (let i = 0; i < data['estimate'].x.length; i++) {
						obj.push({
							year: data['estimate'].x[i],
							est: data['estimate'].y_est[i],
							pred: data['estimate'].y_pred[i]
						});
					}
					temp.push({
						'value': obj,
						'title': data['title']
					});
				}

				setTimeout(() => {
					this.tables = temp;
					console.log(this.tables);
				}, 0);
			}
		});
	}

	populateElephantsData() {
		this.globalService.getElephantGraph().subscribe((resp:any[]) => {
			let val;
			for(let key in resp){
				val = resp[key];
				this.currentObject = val;
				break;
			}

			if (val.length > 0) {
				let temp = [];
				for (let data of val) {
					let obj = [];
					for (let i = 0; i < data['estimate'].x.length; i++) {
						obj.push({
							year: data['estimate'].x[i],
							est: data['estimate'].y_est[i],
							pred: data['estimate'].y_pred[i]
						});
					}
					temp.push({
						'value': obj,
						'title': data['title']
					});
				}

				setTimeout(() => {
					this.tables = temp;
					console.log(this.tables);
				}, 0);
			}
		});
	}

	download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
	
		element.style.display = 'none';
		document.body.appendChild(element);
	
		element.click();
	
		document.body.removeChild(element);
	}
	
	jsonToCsv(title) {
		console.log(this.currentObject);
		let items = this.currentObject;
		const n = items.length
		var idx = -1
		for (let i = 0; i <n; i++){
			if (items[i]["title"] === title){
				idx = i;
				break;
			}
		}
		if(idx==-1)
			return ""
		const head = items[idx]["estimate"]
		const keys = Object.keys(head)
		var len = head[keys[0]].length
		const header = "Year, Total Estimated,Total Predicted"
		
		var csv = header + "\r\n"
		for (let i=0; i<len; i++){
			var row = ""
			var sz = keys.length;
			for(let j=0; j<sz; j++){
				row += head[keys[j]][i]
				if(j!=sz-1)
					row += ","
			}
			row += "\r\n"
			csv += row
		}
		console.log(csv)
		this.download(title+".csv",csv)
		return csv;
	}
	

}
