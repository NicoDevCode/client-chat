import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';
import { ChatComponent } from './components/chat/chat.component';
import { PlansComponent } from './components/plans/plans.component';
import { TiketsComponent } from './components/tikets/tikets.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    PlansComponent,
    TiketsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [DynamicScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
