import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from '../card/card.module';
import { TableModule } from '../table/table.module';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    DialogModule
  ]
})
export class HomeModule { }
