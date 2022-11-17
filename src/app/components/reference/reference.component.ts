import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  isRhino: boolean = false;
	links: any[] = [];
  
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
		this.globalService.isRhino().subscribe((val) => {
			this.isRhino = val;

			if(this.isRhino){
				this.links = [
					"http://dtinews.vn/en/news/017002/52735/customs-officers-detained-for-stealingivory.html.",
          "http://discovery.ucl.ac.uk/1468954/1/Awareness%20CampaignsDraftWorkingPaper.pdf.",
          "https://citizen.co.za/news/southafrica/1994266/rhino-breeder-piet-warren-sells-half-his-animals-due-to-financial-pressure/.",
          "https://www.traffic.org/site/assets/files/12220/african-asian-rhinos-iucn-traffic.pdf",
          "https://policycommons.net/artifacts/1368834/population-viability-analysis-for-the-sumatran-rhino-in-indonesia/1983006/",
          "https://cites.org/sites/default/files/reports/annual-reports/annual-reports.pdf"

				];
			}
			else{
				this.links = [
          "https://africanelephantdatabase.org/report/2016/Africa",
          "https://www.researchgate.net/figure/Fig4-Asian-elephant-population-estimates-during-last-30-years-in-Nepal_fig2_344453321",
          "https://ourworldindata.org/grapher/number-of-asian-elephants",
          "https://www.researchgate.net/publication/235945647_An_analysis_of_numerical_trends_in_African_elephant_populations",
          "https://dc.sourceafrica.net/documents/120754-SSC-OP-060-A.html",
          "https://cites.org/sites/default/files/MIKE/E-Technical_Report_Asia_summary.pdf",
          "African elephant poaching rates correlate with local poverty, national corruption and global ivory price | Nature Communications",
          " ​​http://www.eleaid.com/elephant-conservation/elephant-habitat-loss/",
          "https://www.worldwildlife.org/magazine/issues/winter-2018/articles/the-status-of-asian-elephants",
          "https://blog.nature.org/science/2018/05/21/poachers-are-killing-asian-elephants-for-their-skin/",
          "https://www.frontiersin.org/articles/10.3389/fevo.2018.00235/full"
				];
			}
		});
	}

}
