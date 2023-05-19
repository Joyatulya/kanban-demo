import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-fireplay',
  templateUrl: './fireplay.component.html',
  styleUrls: ['./fireplay.component.scss']
})
export class FireplayComponent {
  constructor(private fs: Firestore) {}
}
