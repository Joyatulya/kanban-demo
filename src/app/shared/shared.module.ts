import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ShellComponent } from './shell/shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MediumCardComponent } from './medium-card/medium-card.component';
import { MatCardModule } from '@angular/material/card';

const components: any = [
  ShellComponent,
  MediumCardComponent
];

const modules = [
  CommonModule,
  RouterModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  declarations: [...components, MediumCardComponent],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
