import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Website/footer/footer.component';
import { NavbarComponent } from './Website/navbar/navbar.component';
import { LandingComponent } from './Website/landing/landing.component';
import { ProductsComponent } from './Website/products/products.component';
import { ProductsnblogComponent } from './Website/productsnblog/productsnblog.component';
import { ProductviewComponent } from './Website/productview/productview.component';
import { HomeComponent } from './home/home.component';
import { BlognewsComponent } from './Website/blognews/blognews.component';
import { LoginComponent } from './Website/login/login.component';
import { AdmindashboardComponent } from './Admin/admindashboard/admindashboard.component';
import { BlogComponent } from './Website/blog/blog.component';
import { NewsComponent } from './Website/news/news.component';
import { AffliateComponent } from './Website/affliate/affliate.component';
import { UserdashComponent } from './User/userdash/userdash.component';
import { UserorderComponent } from './User/userorder/userorder.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    ProductsComponent,
    ProductsnblogComponent,
    ProductviewComponent,
    HomeComponent,
    BlognewsComponent,
    LoginComponent,
    AdmindashboardComponent,
    BlogComponent,
    NewsComponent,
    AffliateComponent,
    UserdashComponent,
    UserorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [provideClientHydration(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
