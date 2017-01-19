import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductListService {
    private productUrl: string = 'api/products/products.json';

    public constructor(private http: Http) {

    }

    public getProducts(): Observable<Array<IProduct>> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <Array<IProduct>>response.json())
            .do(data => console.log('All: ', JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<{}> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}