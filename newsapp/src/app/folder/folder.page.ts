import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  public folder: string;
  articles;
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log("lalala:", data);
      this.articles = data['articles'];
    });
  }
}
