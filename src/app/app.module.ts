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
import { WhoAreWeComponent } from './pages/who-are-we/who-are-we.component';
import { ServicesComponent } from './pages/ourServices/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoComponent } from './logo/logo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FilesComponent } from './pages/files/files.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DropFileDirective } from './pages/files/components/drag-and-drop/directives/drop-file.directive';
import { FileSizePipe } from './pages/files/pipes/file-size.pipe';
import { FileExtPipe } from './pages/files/pipes/file-ext.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './pages/files/components/delete-dialog/delete-dialog.component';
import { ItemCardComponent } from './pages/files/components/item-card/item-card.component';
import { DragAndDropComponent } from './pages/files/components/drag-and-drop/drag-and-drop.component';
import { LoginComponent } from './pages/files/components/login/login.component';


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
    CopyRightComponent,
    WhoAreWeComponent,
    ServicesComponent,
    ClientsComponent,
    LandingComponent,
    PageNotFoundComponent,
    LogoComponent,
    ContactComponent,
    SidenavListComponent,
    FilesComponent,
    DropFileDirective,
    FileSizePipe,
    FileExtPipe,
    DeleteDialogComponent,
    ItemCardComponent,
    DragAndDropComponent,
    LoginComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
