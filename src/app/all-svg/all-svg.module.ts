import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnifyingGlassComponent } from './magnifying-glass/magnifying-glass.component';
import { HeartSvgComponent } from './heart-svg/heart-svg.component';
import { ShoppingCardSvgComponent } from './shopping-card-svg/shopping-card-svg.component';
import { GoogleSvgComponent } from './google-svg/google-svg.component';
import { ArrowSvgComponent } from './arrow-svg/arrow-svg.component';

@NgModule({
  declarations: [
    MagnifyingGlassComponent,
    HeartSvgComponent,
    ShoppingCardSvgComponent,
    GoogleSvgComponent,
    ArrowSvgComponent,
  ],
  exports: [
    MagnifyingGlassComponent,
    HeartSvgComponent,
    ShoppingCardSvgComponent,
    GoogleSvgComponent,
    ArrowSvgComponent,
  ],
  imports: [CommonModule],
})
export class AllSvgModule {}
