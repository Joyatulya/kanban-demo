import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AuthService } from './user/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { ProjectListComponent } from './home-page/project-list/project-list.component';
import { SnackbarService } from './services/snackbar.service';
import { FireplayComponent } from './fireplay/fireplay.component';
import { KanbanModule } from './kanban/kanban.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectListComponent,
    FireplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    KanbanModule
  ],
  providers: [AuthService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
