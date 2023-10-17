import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DpfComponent } from './views/dpf/dpf.component';
import { DiceComponent } from './views/dice/dice.component';
import { CoinComponent } from './views/coin/coin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DpfComponent,
    DiceComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
