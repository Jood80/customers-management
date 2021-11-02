import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: CardsComponent, pathMatch: 'full' },
  { path: 'orders/:id', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
