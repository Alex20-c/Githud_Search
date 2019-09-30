import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './../about/about.component';
import { PageErrorComponent } from './../page-error/page-error.component';
import { ProfileComponent } from './../profile/profile.component';

const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/profile",pathMatch:"full"},
  {path:'**',component:PageErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
