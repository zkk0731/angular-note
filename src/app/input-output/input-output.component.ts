import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {
  name: string = '';
  text: string = '';

  getTextFromChild(text: string) {
    this.text = text;
  }
}
