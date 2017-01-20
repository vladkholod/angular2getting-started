import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-list/product-filter-pipe';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailGuard } from './product-list/product-detail/product-detail-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  providers: [ ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
