import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuard } from './user/auth.guard';
import { FireplayComponent } from './fireplay/fireplay.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path : 'login', loadChildren: () =>  import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', canActivate: [authGuard], loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule)
  },
  {
    // path: 'fireplay', loadComponent: () => import('./fireplay/fireplay.component').then(m => m.FireplayComponent)
    path: 'fireplay', component: FireplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
