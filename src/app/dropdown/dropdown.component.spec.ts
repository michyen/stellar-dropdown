import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { DropdownComponent } from "./dropdown.component";
import { MovieDBService } from "../movie-db.service";

describe("DropdownComponent", () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let movieSvc: MovieDBService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent]
    }).compileComponents();

    TestBed.overrideComponent(DropdownComponent, {
      set: {
        providers: [{ provide: MovieDBService, useClass: MovieDBService }]
      }
    });
  }));

  beforeEach(() => {
    movieSvc = TestBed.get(MovieDBService);
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("test dynmaic injection movie svc", inject(
    [MovieDBService],
    (svc: MovieDBService) => {
      expect(svc).toBe(movieSvc);
    }
  ));

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component.movies).not.toBeNull();
  });
});
