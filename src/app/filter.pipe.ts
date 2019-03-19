import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(arr: string[], searchValue: string) {
    console.log("search: " + searchValue);
    console.log(arr);
    if (!searchValue) return arr;

    if (typeof searchValue === "string") {
      return arr.filter(value => {
        return (
          value["title"].toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
      });
    }
  }
}
