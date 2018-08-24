import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ArticleReadComponent }   from './article-read/article-read.component';
import { ArticleListComponent }   from './article-list/article-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'read',
    component: ArticleReadComponent
  },
  {
    path: 'list',
    component: ArticleListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
