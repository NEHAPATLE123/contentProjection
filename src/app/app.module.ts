import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './shared/components/test/test.component';
import { AuthFromComponent } from './shared/components/auth-from/auth-from.component';
import { AccorComponent } from './shared/components/accor/accor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './shared/components/table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthFromComponent,
    AccorComponent,
    TableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
