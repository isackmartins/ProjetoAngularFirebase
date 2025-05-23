import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoPageRoutingModule } from './contato-routing.module';

import { ContatoPage } from './contato.page';
import { HeaderModule } from '../shared/header/header.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoPageRoutingModule,
     HeaderModule,
    CarouselModule,
    FooterModule,
  ],
  declarations: [ContatoPage]
})
export class ContatoPageModule {}
