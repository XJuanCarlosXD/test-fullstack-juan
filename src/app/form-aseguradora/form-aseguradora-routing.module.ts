import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAseguradoraPage } from './form-aseguradora.page';

const routes: Routes = [
  {
    path: '',
    component: FormAseguradoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAseguradoraPageRoutingModule {}
