import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosPageRoutingModule } from './produtos-routing.module';

import { ProdutosPage } from './produtos.page';
import { FooterModule } from '../shared/footer/footer.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
        HeaderModule,
        CarouselModule,
        FooterModule,
  ],
  declarations: [ProdutosPage]
})
export class ProdutosPageModule {}
