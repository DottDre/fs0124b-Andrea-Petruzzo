import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'user-registered',
    loadChildren: () =>
    import('./user-registered/user-registered.module').then(m => m.UserRegisteredModule)
  },
  { path: 'film-list',
    loadChildren: () =>
      import('./film-list/film-list.module').then(m => m.FilmListModule)
  },
  { path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
