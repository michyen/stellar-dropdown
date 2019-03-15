import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("dropdownAnimation", [
      state(
        "start",
        style({
          height: "0px"
        })
      ),
      state(
        "end",
        style({
          height: "150px"
        })
      ),
      transition("start => end", animate(500)),
      transition("end => start", animate("500ms ease-out"))
    ])
  ]
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
    { id: 5, title: "policy005" }
  ];
  expanded: boolean = false;
  selected: any;

  constructor() {}

  dropdownClicked() {
    this.expanded = !this.expanded;
  }

  movieSelected(movie) {
    this.selected = movie;
    this.dropdownClicked();
  }

  clearSelection() {
    this.selected = null;
  }

  containerExpanded() {
    if (this.expanded) {
      return { dropShadow: true };
    } else {
      return { bottomRadius: true };
    }
  }
}
