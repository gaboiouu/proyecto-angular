import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponentComponent } from './details-component/details-component.component';

const routes: Routes = [
  {path:'',component:DetailsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsModuleRoutingModule { }
