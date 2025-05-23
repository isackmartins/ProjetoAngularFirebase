import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';
import { HeaderModule } from '../shared/header/header.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule,
    HeaderModule,
    CarouselModule,
    FooterModule,
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
