import { Component } from '@angular/core';
import { MediumCardComponent } from 'src/app/shared/medium-card/medium-card.component';
import { ProjectDescription } from 'src/app/shared/project-description';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

   projectList: ProjectDescription[] = [
    {
      title : 'Kanban',
      subtitle : 'Organise ideas',
       description: 'Organise your ideas by dragging and dropping shit.',
      url: '/kanban'
     },
     {
       title: 'ORBIT Score',
       subtitle: 'Calculate Bleeding Risk',
       description: 'Reliably Calculate the bleeding risk and appropriately prescribe anticoagulants'
     },
     {
       title: 'BMI',
       subtitle: 'Calculate your BMI',
       description: 'Know about yout current health and take the best decisions accordingly'
     },
     {
       title: 'Fireplay',
       subtitle: 'Learn Firestore',
       description: 'Learn and use firestore in your own projects',
       url: '/fireplay'
     }
   ]
  
}
