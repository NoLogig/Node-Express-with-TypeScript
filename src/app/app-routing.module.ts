import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [

  { 
    path: '',
    pathMatch: 'full', 
    redirectTo: 'home'
  },
    { 
    path: 'home',
    children: [], 
    component: HomeComponent
  },
  {
    path: "**",
    component: HomeComponent
    /* to Do: Fancy PageNotFound 8) */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
