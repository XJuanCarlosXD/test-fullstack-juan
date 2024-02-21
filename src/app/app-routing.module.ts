import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'form-aseguradora',
    loadChildren: () =>
      import('./form-aseguradora/form-aseguradora.module').then(
        (m) => m.FormAseguradoraPageModule
      ),
  },
  {
    path: 'fomr/edit/:id',
    loadChildren: () =>
      import('./form-aseguradora/form-aseguradora.module').then(
        (m) => m.FormAseguradoraPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
