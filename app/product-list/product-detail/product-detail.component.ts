import { Component } from '@angular/core';

import { IProduct } from '../product';

@Component({
    moduleId: module.id,
    selector: 'vk-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css'],
})
export class ProductDetailComponent {
    public pageTitle: string = 'Product Detail';
    public product: IProduct;

}