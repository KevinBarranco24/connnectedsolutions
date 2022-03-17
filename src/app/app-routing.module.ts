import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { StarsesionComponent } from './starsesion/starsesion.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Nosotros', component: AboutComponent
  },
  {
    path: 'Contacto', component: ContactComponent
  },
  {
    path: 'Categorias', component: CategoriesComponent
  },
  {
    path: 'Tickets', component: TicketListComponent
  },
  {
    path: 'Crear-TIcket', component: CreateComponent
  },
  {
    path: 'Login', component: StarsesionComponent 
  },
  {
    path: 'Sign_Up', component: RegisterComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
