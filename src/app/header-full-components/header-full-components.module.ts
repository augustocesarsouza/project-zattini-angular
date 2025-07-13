import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFullMainComponent } from './header-full-main/header-full-main.component';
import { HeaderMainComponent } from './header-components/header-main/header-main.component';
import { HeaderSecondMainComponent } from './header-second-components/header-second-main/header-second-main.component';
import { AllSvgModule } from '../all-svg/all-svg.module';

@NgModule({
  declarations: [HeaderFullMainComponent, HeaderMainComponent, HeaderSecondMainComponent],
  exports: [HeaderFullMainComponent],
  imports: [CommonModule, AllSvgModule],
})
export class HeaderFullComponentsModule {}
