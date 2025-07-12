import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: process.env['BASE_URL'] || '',
    },
    {
      provide: 'KEY_USER',
      useValue: process.env['KEY_USER'] || '',
    },
  ],
})
export class AppServerModule {}
