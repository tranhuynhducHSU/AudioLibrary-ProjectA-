import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './material-module';
import { SpinkitModule } from './component/spinkit/spinkit.module';
import { LoginDialogComponent } from './component/dialog/login/login-dialog/login-dialog.component';

@NgModule({
  declarations: [AppComponent, LoginDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule,
    HttpClientModule,
    MatSnackBarModule,
    SpinkitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
