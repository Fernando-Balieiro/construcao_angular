import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAllClientesComponent} from "./pages/get-all-clientes/get-all-clientes.component";
import {LandingPageComponent} from "../landing-page/landing-page.component";

const routes: Routes = [
  // Main page dos clientes
  {
    path: "",
    component: LandingPageComponent
  },
  //
  {
    path: "get",
    component: GetAllClientesComponent
  },
  {
    path: "get/:id",
  },
  {
    path: "post/:id"
  },
  {
    path: "delete/:id"
  },
  {
    path: "edit/:id"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
