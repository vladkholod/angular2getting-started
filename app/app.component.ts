import { Component } from '@angular/core';

import { ProductListService } from './product-list/product-list.service';

@Component({
    selector: 'vk-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [ProductListService]
})
export class AppComponent {
    public pageTitle: string = 'Main page';
}