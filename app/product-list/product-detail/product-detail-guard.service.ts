import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    public constructor(private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        let id: number = parseInt(route.url[1].path, 10);
        if (!isNaN(id) && id > 0) {
            return true;
        }

        alert('Invalid product id');
        this.router.navigate(['/products']);

        return false;
    }
}