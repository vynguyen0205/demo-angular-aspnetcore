import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonsComponent } from './persons/list-persons/list-persons.component';
import { ViewPersonComponent } from './persons/view-person/view-person.component';
import { UpdatePersonComponent } from './persons/update-person/update-person.component';
import { AddPersonComponent } from './persons/add-person/add-person.component';

const routes: Routes = [
    { path: '', component: ListPersonsComponent },
    { path: 'view/:id', component: ViewPersonComponent },
    { path: 'update/:id', component: UpdatePersonComponent },
    { path: 'add', component: AddPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}