import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

@NgModule({
  declarations: [OrderListComponent, OrderDisplayComponent, OrderAddComponent, OrderEditComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
