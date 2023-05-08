import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from './records-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    SharedModule
  ]
})
export class RecordsModule { }
