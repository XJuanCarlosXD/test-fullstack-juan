import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAseguradoraPageRoutingModule } from './form-aseguradora-routing.module';

import { FormAseguradoraPage } from './form-aseguradora.page';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAseguradoraPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [FormAseguradoraPage],
  providers: [DataService],
})
export class FormAseguradoraPageModule {}
