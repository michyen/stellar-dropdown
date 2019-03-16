import { Component, HostListener, ElementRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { MovieDBService } from "./movie-db.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("dropdownAnimation", [
      state("start", style({ height: "0px" })),
      state("end", style({ height: "150px" })),
      transition("start => end", animate(500)),
      transition("end => start", animate("500ms ease-out"))
    ]),
    trigger("twistyAnimation", [
      state("hide", style({ transform: "rotate(0)" })),
      state("show", style({ transform: "rotate(180deg)" })),
      transition("hide => show", animate("350ms ease-out")),
      transition("show => hide", animate("350ms ease-in"))
    ])
  ]
})
export class AppComponent {
  @HostListener("document:click", ["$event.target"])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      // hide dropdown
      this.expanded = false;
    }
  }

  movies: any;
  // movies: any = [
  //   { id: 0, title: "policy001" },
  //   { id: 2, title: "policy002" },
  //   { id: 3, title: "policy003" },
  //   { id: 4, title: "policy004" },
  //   { id: 5, title: "policy005" },
  //   { id: 0, title: "policy001" },
  //   { id: 2, title: "policy002" },
  //   { id: 3, title: "policy003" },
  //   { id: 4, title: "policy004" },
  //   { id: 5, title: "policy005" }
  // ];
  expanded: boolean = false;
  selected: any;

  constructor(
    private movieDB: MovieDBService,
    private _elementRef: ElementRef
  ) {
    movieDB.getPopular().subscribe(result => (this.movies = result.results));
  }

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
      return { dropShadow: false };
    }
  }

  turnTwisty() {
    if (this.expanded) {
      return { rotated: true };
    } else {
      return { rotated: false };
    }
  }
}
