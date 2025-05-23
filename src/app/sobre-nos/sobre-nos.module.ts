import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreNosPageRoutingModule } from './sobre-nos-routing.module';

import { SobreNosPage } from './sobre-nos.page';
import { HeaderModule } from '../shared/header/header.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreNosPageRoutingModule,
        HeaderModule,
        CarouselModule,
        FooterModule,
  ],
  declarations: [SobreNosPage]
})
export class SobreNosPageModule {}
