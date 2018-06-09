import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Dog',
    api: 'https://dog.ceo/api/breeds/image/random',
    fontsize: 40
  };

  public src: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getDog();
  }
  getDogAPI() {
    return this.http.get(this.image.api)
  }
  getDog() {
    this.getDogAPI().subscribe((data: any) => {
      let response = data.json()
      if (response) {
        this.src = response['message']
      }
    })
  }

}
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
