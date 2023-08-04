import { Component, OnInit } from '@angular/core';
import { GetUserApiService } from '../services/get-user-api.service';
@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.scss'],
})
export class FetchApiComponent implements OnInit {
  constructor(private getUserService: GetUserApiService) {}

  name: string = '';
  phone: string = '';
  picUrl: string = '';

  ngOnInit(): void {
    this.getUserService.getUserData().subscribe((data: any) => {
      console.log(data);
      this.name = data.results[0].name.first + ' ' + data.results[0].name.last;
      this.phone = data.results[0].phone;
      this.picUrl = data.results[0].picture.medium;
    });
  }
}
