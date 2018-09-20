import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { ListPersonsComponent } from "./persons/list-persons/list-persons.component";
import { ViewPersonComponent } from "./persons/view-person/view-person.component";
import { UpdatePersonComponent } from "./persons/update-person/update-person.component";
import { AddPersonComponent } from "./persons/add-person/add-person.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from "@angular/common/http";
import { HttpCustomInterceptor } from "./interceptors/http-custom.interceptor";
import { PersonService } from "./services/person.service";
import { FormsModule } from "@angular/forms";
import { RangeValidatorDirective } from "./directives/range-validator.directive";
import { HighlightSearchPipe } from "./pipes/hightlight-search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    ViewPersonComponent,
    UpdatePersonComponent,
    AddPersonComponent,
    RangeValidatorDirective,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptor,
      multi: true
    },
    HttpClient,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
