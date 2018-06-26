import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResponseInterceptor } from './http-interceptor/responseInterceptor';
import { LoginsModule } from './modules/logins/logins.module';
import { RoomsForRentModule } from './modules/rooms-for-rent/rooms-for-rent.module';
import { SystemManagementModule } from './modules/system-management/system-management.module';
import { CustomHttpInterceptor } from './http-interceptor/customHttpInterceptor';
import { HttpEventLoadingInterceptor, HTTPStatus } from './http-interceptor/httpEventLoadingInterceptor';
const RxJS_Services = [HttpEventLoadingInterceptor, HTTPStatus];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LoginsModule,
    SystemManagementModule,
    RoomsForRentModule
  ],
  providers: [
    ...RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpEventLoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
