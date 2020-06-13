import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { HeaderComponent } from './layout/header/header.component';
import { BreabcrumbComponent } from './layout/breabcrumb/breabcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginDialogComponent } from './users/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './users/register-dialog/register-dialog.component';
import { ForgotDialogComponent } from './users/forgot-dialog/forgot-dialog.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreabcrumbComponent,
    FooterComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    ForgotDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'rvhl-ssr' }),
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
