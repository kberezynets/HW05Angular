import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UsersComponent } from './pages/works/users/users.component';
import { TaskComponent } from './pages/works/task/task.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent, children: [
    {path: 'cenzor', component: CenzorComponent},
    {path: 'users', component: UsersComponent},
    {path: 'task', component: TaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
