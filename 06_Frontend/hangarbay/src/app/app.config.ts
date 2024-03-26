import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { InventoryComponent } from './repairs-form/repairs-form.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
