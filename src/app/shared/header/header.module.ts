import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent //importamos somente componentes
  ],
  imports: [
    CommonModule, //importamos outros módulos
    IonicModule
  ],
  exports: [
    HeaderComponent //exporto aqui somente componentes
  ]
})
export class HeaderModule { }
