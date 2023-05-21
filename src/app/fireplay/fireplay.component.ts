import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-fireplay',
  templateUrl: './fireplay.component.html',
  styleUrls: ['./fireplay.component.scss']
})
  
export class FireplayComponent implements OnInit{
  constructor(private db: AngularFirestore) { } 

  async getProjects() {
    const project = await this.db.collection('projects').doc('kanban').get().subscribe(ref => {
      const data : any= ref.data()
      console.log(data['title'])
    })
  }
  
  ngOnInit() {
    this.getProjects()
  }
}
