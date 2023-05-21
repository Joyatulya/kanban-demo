import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    BoardlistComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule
  ]
})
export class KanbanModule { }
