import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// Import the require modules
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { vi_VN, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    FlexLayoutServerModule,
    NoopAnimationsModule,
    NzI18nModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ]
})
export class AppServerModule { }
