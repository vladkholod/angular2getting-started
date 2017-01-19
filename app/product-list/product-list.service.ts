import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductListService {

    public getProducts(): Array<IProduct> {
        return [{
            id: 1,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 1.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        }, {
            id: 2,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 2.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        }, {
            id: 3,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 3.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        }, {
            id: 4,
            name: 'Leaf Rake',
            code: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 4.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        }];
    }
}