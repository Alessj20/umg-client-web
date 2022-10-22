import { UpdateComponent } from './client/update.component';
import { CreateComponent } from './client/create.component';
import { DetailComponent } from './client/detail.component';
import { ListComponent } from './client/list.component';
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
