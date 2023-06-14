import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('../feedback/feedback.module').then( m => m.FeedbackPageModule)
      },
      {
        path: 'display-feedback',
        loadChildren: () => import('../display-feedback/display-feedback.module').then( m => m.DisplayFeedbackPageModule)
      },
    

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ],
    
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
