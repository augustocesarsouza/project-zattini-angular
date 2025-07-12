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
      useFactory: () => process.env['BASE_URL'] || '',
    },
  ],
})
export class AppServerModule {}
