import { Component, OnInit } from "@angular/core";
import { MovieDBService } from "../movie-db.service";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.css"]
})
export class SearchInputComponent implements OnInit {
  movies: any;
  selected: any;
  show = false;
  showClearBtn = false;

  constructor(private movieDB: MovieDBService) {
    movieDB.getPopular().subscribe(result => (this.movies = result.results));
  }

  ngOnInit() {}

  movieSelected(movie) {
    this.selected = movie.title;
    this.show = false;
    this.showClearBtn = true;
  }

  clearSelection() {
    this.selected = null;
    this.showClearBtn = false;
  }
}
