import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSportstyleRoutingModule } from './product-sportstyle-routing.module';
import { SportstyleMainComponent } from './sportstyle-full-components/sportstyle-main/sportstyle-main.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { HeaderFullComponentsModule } from '../header-full-components/header-full-components.module';
import { FilterSidebarComponent } from './sportstyle-full-components/filter-sidebar/filter-sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SportstyleMainComponent, FilterSidebarComponent],
  exports: [],
  imports: [
    CommonModule,
    AllSvgModule,
    ProductSportstyleRoutingModule,
    HeaderFullComponentsModule,
    FormsModule,
  ],
  // imports: [CommonModule, LoginAndRegisterUserRoutingModule, FormsModule, AllSvgModule],
})
export class ProductSportstyleModule {}
