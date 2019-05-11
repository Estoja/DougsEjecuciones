import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { GpsComponent } from './svg/gps/gps.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PhoneComponent } from './svg/phone/phone.component';
import { MailComponent } from './svg/mail/mail.component';
import { FacebookComponent } from './svg/facebook/facebook.component';
import { TwitterComponent } from './svg/twitter/twitter.component';
import { InstagramComponent } from './svg/instagram/instagram.component';
import { CopyRightComponent } from './svg/copy-right/copy-right.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    GpsComponent,
    PhoneComponent,
    MailComponent,
    FacebookComponent,
    TwitterComponent,
    InstagramComponent,
    CopyRightComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
