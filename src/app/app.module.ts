import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';

import {KanbanService} from './services/kanban.service';

import {KanbanrowDirective} from './directive/kanbanrow.directive';
import {KanbancolDirective} from './directive/kanbancol.directive';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    KanbanrowDirective,
    KanbancolDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [KanbanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
