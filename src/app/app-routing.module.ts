import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { PlansComponent } from './components/plans/plans.component';
import { TiketsComponent } from './components/tikets/tikets.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'tikets', component: TiketsComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
