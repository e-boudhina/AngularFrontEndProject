import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LayoutComponent } from './home/layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import {ListStockComponent} from "./management/stock-managment/list-stock/list-stock.component";
import {AddStockComponent} from "./management/stock-managment/add-stock/add-stock.component";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateStockComponent } from './management/stock-managment/update-stock/update-stock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListRayonComponent } from './management/rayon-management/list-rayon/list-rayon.component';
import { AddRayonComponent } from './management/rayon-management/add-rayon/add-rayon.component';
import { UpdateRayonComponent } from './management/rayon-management/update-rayon/update-rayon.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { ErrorsComponent } from './errors/errors/errors.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,
    ListStockComponent,
    AddStockComponent,
    UpdateStockComponent,
    PageNotFoundComponent,
    ListRayonComponent,
    AddRayonComponent,
    UpdateRayonComponent,
    ErrorsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
