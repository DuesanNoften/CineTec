import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  movies: string[] = [
    'https://es.web.img3.acsta.net/c_310_420/pictures/23/08/30/11/35/1125863.jpg',
    'https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001369',
    'https://static.cinepolis.com/resources/mx/movies/posters/414x603/43625-576778-20230908013033.jpg'
  ];
  i : number = 0;

  chageImageR(){
    if(this.i == this.movies.length-1){
      this.i = 0;
    }else{
      this.i ++;
    }
  }

  chageImageL(){
    if(this.i == 0){
      this.i = this.movies.length-1;
    }else{
      this.i --;
    }
  }

}
