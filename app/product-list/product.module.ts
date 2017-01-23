import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter-pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail/product-detail-guard.service';
import { ProductListService } from './product-list.service';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductListService,
        ProductDetailGuard
    ]
})
export class ProductModule { }