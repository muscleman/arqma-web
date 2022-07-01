import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'

const material = [
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
]


@NgModule({
  declarations: [],
  imports: [CommonModule, ...material],
  exports: [...material]
})
export class MaterialModule { }
