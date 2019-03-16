import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieDBService {
  popular =
    "https://api.themoviedb.org/3/movie/popular?api_key=bcfdd85cacebfed2261032719fc2742a";

  constructor(private http: HttpClient) {}

  getPopular(): Observable<any> {
    return this.http.get<any>(this.popular);
  }
}
