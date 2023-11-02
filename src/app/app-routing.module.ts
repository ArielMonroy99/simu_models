import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinComponent } from './views/coin/coin.component';
import { DpfComponent } from './views/dpf/dpf.component';
import { MinimizeFunctionComponent } from './views/minimize-function/minimize-function.component';
import { DiceComponent } from './views/dice/dice.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:'coin', component: CoinComponent
  },
  {
    path: 'dpf', component: DpfComponent
  },
  {
    path: 'minimize', component: MinimizeFunctionComponent,
  },
  {
    path: 'dice', component: DiceComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
