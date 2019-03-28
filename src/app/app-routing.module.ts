import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiComponent } from './components/municipi/municipi.component';
import { MunicipioDetailComponent } from './components/municipio-detail/municipio-detail.component';
import { MuncipioAddComponent } from './components/muncipio-add/muncipio-add.component';
import { MunicipioEditComponent } from './components/municipio-edit/municipio-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'municipi',component: MunicipiComponent, data: {title: 'Lista Municipi'}},
  {path: 'login', component: LoginComponent },
  { path: 'municipio-details/:id', component: MunicipioDetailComponent, data: {title: 'Dettagli Municipio'}},
  { path: 'municipio-add', component: MuncipioAddComponent, data: {title: 'Aggiungi un Municipio'}},
  { path: 'municipio-edit/:id', component: MunicipioEditComponent, data:{title: 'Modifica un Muncipio'}},
  { path: '', redirectTo: 'municipi', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
