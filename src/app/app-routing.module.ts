import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path:'items', component:ItemsListComponent},
  {path:'item-detail/:item', component:ItemDetailComponent},
  {path:'', pathMatch:'full', redirectTo:'items'},
  {path:'**', redirectTo:'items'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
