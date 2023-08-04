import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() fromOutterName = '';
  @Output() pushToOutter = new EventEmitter<string>();

  text: string = '';

  push() {
    this.pushToOutter.emit(this.text);
  }
}
