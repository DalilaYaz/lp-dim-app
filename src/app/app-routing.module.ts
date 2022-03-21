import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { StudentComponent } from './student/student.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:"students",
    pathMatch:"full",
  },
  {
    path:"students",
    loadChildren: () => import ("./student/student.module").then(m => m.StudentModule)
  },
  {
    path:"**",
    component:NotFoundError,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
