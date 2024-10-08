import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBusModule, EventBusService } from 'lib-event-bus-rm';
import { CharacterTableComponent } from "./shared/components/character-table/character-table.component";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventBusModule,
    CharacterTableComponent
],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
