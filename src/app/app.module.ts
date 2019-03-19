import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { RouterModule, Routes } from "@angular/router";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { FilterPipe } from "./filter.pipe";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dropdown",
    pathMatch: "full"
  },
  {
    path: "search",
    component: SearchInputComponent
  },
  {
    path: "dropdown",
    component: DropdownComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: [
    AppComponent,
    SearchInputComponent,
    DropdownComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
