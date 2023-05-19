import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {

  isColorChange: boolean = false;
  inputColor: string = '#ff00ff'
  header_size: number = 32;
  cursor_y: number = 1;

  changeColor() {
    this.isColorChange = !this.isColorChange
    this.inputColor =  this.isColorChange ? '#ff00ff' : '#00ffff'
  }

  get header_font_size() {
    this.header_size = this.cursor_y/10 + 28
    // console.log(size)
    return this.header_size + 'px'
  }

  onMouseMove(event : MouseEvent) {
    this.cursor_y = event.screenY
  }
}
