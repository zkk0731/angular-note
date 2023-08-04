import { Component } from '@angular/core';

@Component({
  selector: 'app-filereader',
  templateUrl: './filereader.component.html',
  styleUrls: ['./filereader.component.scss'],
})
export class FilereaderComponent {
  imgUrl = '';

  getImg(e: any) {
    console.log(e);
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e: any) => {
      this.imgUrl = e.target.result;
    };
  }
}
