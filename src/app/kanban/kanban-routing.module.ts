import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardlistComponent } from './boardlist/boardlist.component';

const routes: Routes = [
  {path: '', component: BoardlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
