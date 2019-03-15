import { Component, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any = [
    { id: 0, title: "policy001" },
    { id: 2, title: "policy002" },
    { id: 3, title: "policy003" },
    { id: 4, title: "policy004" },
    { id: 5, title: "policy005" },
    { id: 0, title: "policy001" },
    { id: 2, title: "policy002" },
    { id: 3, title: "policy003" },
    { id: 4, title: "policy004" },
    { id: 5, title: "policy005" },
  ];
  clicked: boolean = false;
  selected: any;

  constructor() { }

  dropdownClicked() {
    this.clicked = (!this.clicked);
  }

  movieSelected(movie) {
    this.selected = movie;
    this.dropdownClicked();
  }


}
