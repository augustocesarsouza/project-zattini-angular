import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnifyingGlassComponent } from './magnifying-glass/magnifying-glass.component';
import { HeartSvgComponent } from './heart-svg/heart-svg.component';
import { ShoppingCardSvgComponent } from './shopping-card-svg/shopping-card-svg.component';
import { GoogleSvgComponent } from './google-svg/google-svg.component';

@NgModule({
  declarations: [
    MagnifyingGlassComponent,
    HeartSvgComponent,
    ShoppingCardSvgComponent,
    GoogleSvgComponent,
  ],
  exports: [
    MagnifyingGlassComponent,
    HeartSvgComponent,
    ShoppingCardSvgComponent,
    GoogleSvgComponent,
  ],
  imports: [CommonModule],
})
export class AllSvgModule {}
