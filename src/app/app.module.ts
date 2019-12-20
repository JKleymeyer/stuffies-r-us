import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@Angular/forms';

import { AppComponent } from './app.component';
import { StuffyAddListComponent } from './feature/stuffy-add-list/stuffy-add-list.component';
import { StuffyListComponent } from './feature/stuffy-list/stuffy-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StuffyAddListComponent,
    StuffyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
