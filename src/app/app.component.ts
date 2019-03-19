import {
  Component,
  HostListener,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // @Output() outsideClick = new EventEmitter();
  // @HostListener("document:click", ["$event.target"])
  // public onClick(targetElement) {
  //   const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //   if (!clickedInside) {
  //     // hide dropdown
  //     this.outsideClick.emit();
  //   }
  // }

  constructor(private elementRef: ElementRef) {}
}
