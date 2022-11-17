import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';


@Component({
	selector: 'app-community',
	templateUrl: './community.component.html',
	styleUrls: ['./community.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CommunityComponent implements OnInit {

	text: string = "<p>Welcome</p>"
	posts: any[] = [];
	newPost = false;
	newContent: string = "";
	showDialog: boolean = false;

	constructor(private globalService: GlobalService) {

	}

	something(event: any): void {
		this.text = event.htmlValue;
	}

	ngOnInit(): void {
		this.globalService.setLoading(true);
		this.globalService.getPosts().subscribe((resp: any[]) => {
			console.log(resp)
			let temp = [];
			for(let key in resp){
				temp.push({...resp[key], id: key});
			}
			temp.reverse();
			this.posts = temp;
			console.log("posts", this.posts);
			setTimeout(() => {
				this.globalService.setLoading(false);
			}, 500);
		});
	}


	savePost() {
		console.log("save", this.newContent);
		this.globalService.setLoading(true);
		this.globalService.setPosts({"message": this.newContent, "score": 0}).subscribe((resp: any[]) => {
			if(resp){
				console.log("resp", resp);
				this.ngOnInit();
				this.newPost = false;
			}

			setTimeout(() => {
				this.globalService.setLoading(false);
			}, 500);
		});
	}

	updateScore(post: any, score: number) {
		this.globalService.setLoading(true);
		console.log("update", post, score);
		this.globalService.updateScore(post, post.score + score).subscribe((resp: any[]) => {
			if(resp){
				console.log("resp", resp);
				this.ngOnInit();
			}
		});
	}

}
