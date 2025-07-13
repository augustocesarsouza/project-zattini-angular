import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderFullComponentsModule } from '../header-full-components/header-full-components.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HeaderFullComponentsModule],
})
export class HomePageModule {}
