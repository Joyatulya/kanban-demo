import { Component, Input } from '@angular/core';
import { ProjectDescription } from '../project-description';


@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.scss']
})
export class MediumCardComponent {
  @Input() project : ProjectDescription = {
    title: '',
    subtitle: '',
    description: '',
    url: ''
  };
}
