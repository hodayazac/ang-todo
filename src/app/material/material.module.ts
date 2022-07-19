import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

const modules=[
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
   
  ],exports: modules
})
export class MaterialModule { }