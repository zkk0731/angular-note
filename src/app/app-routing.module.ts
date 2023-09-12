import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { FilereaderComponent } from './filereader/filereader.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/input-output', pathMatch: 'full' },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'ngfor', component: NgForComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'filereader', component: FilereaderComponent },
  { path: 'fetch', component: FetchApiComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'form', component: FormComponent },
  { path: 'modal', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
