import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { FilereaderComponent } from './filereader/filereader.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InputOutputComponent,
    NgForComponent,
    NgifComponent,
    NgclassComponent,
    FilereaderComponent,
    FetchApiComponent,
    PipeComponent,
    FormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
