import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './app.routes';
import { App } from './app';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Item } from './item/item';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RoutesModule, RouterModule, App, Contact, About, Item
  ],
  bootstrap: []
})
export class AppModule { }
