import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArListComponent } from './ar-list/ar-list.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentOutletComponent } from './content-outlet/content-outlet.component';
import { ArListItemComponent } from './ar-list-item/ar-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ArListComponent,
    MenuComponent,
    ProfileComponent,
    ContentOutletComponent,
    ArListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
