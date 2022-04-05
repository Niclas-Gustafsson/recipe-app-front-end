import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import {PublicComponent} from "./public/public.component";
import { RegistrationComponent } from './public/registration/registration.component';
import {ListsComponent} from "./private/lists/lists.component";
import {RecipeListComponent} from "./private/lists/recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "./public/recipe-details/recipe-details.component";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'recipe/:id', component: RecipeDetailsComponent},
    ]
  },

  {
    path: 'user',
    component: PrivateComponent,
    children: [
      {path: 'list',
        component: ListsComponent,
        children: [
          {path: ':id', component: RecipeListComponent},
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
