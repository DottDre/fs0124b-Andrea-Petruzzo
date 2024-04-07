import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';
import { GuestGuard } from './auth/guest.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule),
      canActivate:[GuardGuard]
  },
  { path: 'user-registered',
    loadChildren: () =>
    import('./user-registered/user-registered.module').then(m => m.UserRegisteredModule),
    canActivate:[GuardGuard]
  },
  { path: 'film-list',
    loadChildren: () =>
      import('./film-list/film-list.module').then(m => m.FilmListModule),
    canActivate:[GuardGuard]
  },
  { path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[GuestGuard]
  },
  { path: 'addfilm',
    loadChildren: () =>
      import('./addfilm/addfilm.module').then(m => m.AddfilmModule)
  },
  { path: 'editfilm',
    loadChildren: () =>
      import('./editfilm/editfilm.module').then(m => m.EditfilmModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
