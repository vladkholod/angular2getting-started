import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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

    public productsFilter: string = 'Rake';
    public notifications: Array<string> = new Array<string>();

    public products: IProduct[] = [
        {
            id: 1,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 1.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            id: 2,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 2.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            id: 3,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 3.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            id: 4,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 4.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        }
    ];

    public ngOnInit(): void {
        console.log('Product-list is initialized.');
    }

    public toggleImages(): void {
        this.showImages = !this.showImages;
    }

    public onRatingClicked(message: string): void {
        this.notifications.push(message);

        setTimeout(() => this.notifications.shift(), 3000);
    }
}