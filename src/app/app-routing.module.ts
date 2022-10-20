import { UpdateComponent } from './product/update.component';
import { CreateComponent } from './product/create.component';
import { DetailComponent } from './product/detail.component';
import { ListComponent } from './product/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
