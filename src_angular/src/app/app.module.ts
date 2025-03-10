import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';

import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TwoFactorDialog } from './login/login-2FA';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrCodeDialog } from './dashboard/dashboard-qrcode';
import { DeleteDialog } from './dashboard/dashboard-delete';
import { PskDialog } from './dashboard/dashboard-psk';
import { EmailDialog } from './dashboard/dashboard-email';
import { ErrorDialog } from './dashboard/dashboard-error';
import { WarningDialog } from './dashboard/dashboard-warning';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, TwoFactorDialog,
    DashboardComponent, QrCodeDialog, DeleteDialog, PskDialog, EmailDialog, ErrorDialog, WarningDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatDividerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    QrCodeModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule
  ],
  providers: [{
    provide: MatRadioModule,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  }
}