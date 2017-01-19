import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductListService } from './product-list.service';

@Component({
    moduleId: module.id,
    selector: 'vk-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = 'Product List';

    public imageSize: number = 50;
    public imageMargin: number = 2;

    public showImages: boolean = false;

    public products: Array<IProduct>;

    public productsFilter: string = 'Rake';
    public notifications: Array<string> = new Array<string>();

    public constructor(private productListService: ProductListService) {
    }

    public ngOnInit(): void {
        this.products = this.productListService.getProducts();
    }

    public toggleImages(): void {
        this.showImages = !this.showImages;
    }

    public onRatingClicked(message: string): void {
        this.notifications.push(message);

        setTimeout(() => this.notifications.shift(), 3000);
    }
}