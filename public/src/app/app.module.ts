import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewComponent } from "./new/new.component";
import { ListComponent } from "./list/list.component";
import { EditComponent } from "./edit/edit.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NewComponent, ListComponent, EditComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
