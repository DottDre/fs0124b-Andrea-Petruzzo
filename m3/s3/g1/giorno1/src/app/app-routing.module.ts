import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () =>
import('./pages/home/home.module').then(m => m.HomeModule)
},
  { path: 'contattaci', loadChildren: () =>
  import('./pages/contattaci/contattaci.module').then(m => m.ContattaciModule)
},
  { path: 'chi-siamo', loadChildren: () =>
  import('./pages/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule),
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
