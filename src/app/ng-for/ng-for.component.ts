import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  employees = [
    { name: 'John', age: 15 },
    { name: 'Mike', age: 33 },
    { name: 'Nick', age: 25 },
    { name: 'Mary', age: 40 },
  ];
}
