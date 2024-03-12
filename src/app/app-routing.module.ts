import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductviewComponent } from './Website/productview/productview.component';
import { HomeComponent } from './home/home.component';
import { BlognewsComponent } from './Website/blognews/blognews.component';
import { LoginComponent } from './Website/login/login.component';
import { AdmindashboardComponent } from './Admin/admindashboard/admindashboard.component';
import { NewsComponent } from './Website/news/news.component';
import { BlogComponent } from './Website/blog/blog.component';
import { AffliateComponent } from './Website/affliate/affliate.component';

const routes: Routes = [
  {path:'productdetail',component:ProductviewComponent},
  {path:'',component:HomeComponent},
  {path:'hello',component:BlognewsComponent},
  {path:'login&signup',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent},
  {path:'news',component:NewsComponent},
 
  {path:'blogs',component:BlogComponent},
  {path:'affiliate',component:AffliateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
