import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import {ListStockComponent} from "./management/stock-managment/list-stock/list-stock.component";
import {AddStockComponent} from "./management/stock-managment/add-stock/add-stock.component";
import {UpdateStockComponent} from "./management/stock-managment/update-stock/update-stock.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListRayonComponent} from "./management/rayon-management/list-rayon/list-rayon.component";
import {AddRayonComponent} from "./management/rayon-management/add-rayon/add-rayon.component";
import {UpdateRayonComponent} from "./management/rayon-management/update-rayon/update-rayon.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
        {  path: 'stock-management',
                      children: [
                                        { path: 'list-stock', component: ListStockComponent },
                                        { path: 'add-stock', component: AddStockComponent },
                                        { path: 'update-stock/:id', component: UpdateStockComponent }
                                      ]
        },
      { path: 'rayon-management',
                      children:[
                                        {path: 'list-rayon', component: ListRayonComponent},
                                        {path: 'add-rayon', component: AddRayonComponent},
                                        {path: 'update-rayon/:id', component: UpdateRayonComponent}
                                      ]
      }
    ]
  },
  { path: '**', component:  PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
