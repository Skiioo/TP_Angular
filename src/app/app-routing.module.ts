import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';



const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'etudiant-paris', component: EtudiantParisComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
