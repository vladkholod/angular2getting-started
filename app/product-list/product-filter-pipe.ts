import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    public transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;

        return filterBy ? value.filter((product: IProduct) =>
            product.name.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}