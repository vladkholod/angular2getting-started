import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../product';
import { ProductListService } from '../product-list.service';

@Component({
    moduleId: module.id,
    selector: 'vk-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    public pageTitle: string = 'Product Detail';
    public product: IProduct;

    public errorMessage: string;

    public constructor(private productListService: ProductListService,
                       private route: ActivatedRoute,
                       private router: Router) {
    }

    public ngOnInit(): void {
        let id: number = parseInt(this.route.snapshot.params['id'], 10);
        if (!isNaN(id) && id > 0) {
            this.productListService.getProducts()
                .subscribe((products: Array<IProduct>) => this.product = products.find(product => product.id === id),
                error => this.errorMessage = <any>error);
        }
    }

    public onBack(): void {
        this.router.navigate(['/products']);
    }
}