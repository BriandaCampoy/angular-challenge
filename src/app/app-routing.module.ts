import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Feed',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'researcher',
    loadChildren: () =>
      import('./pages/researcher/researcher.module').then(
        (m) => m.ResearcherModule
      ),
  },
  {
    path: 'journal',
    loadChildren: () =>
      import('./pages/journal/journal.module').then((m) => m.JournalModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'researchers-list',
    loadChildren: () =>
      import('./pages/researcher-list/researcher-list.module').then(
        (m) => m.ResearcherListModule
      ),
  },
  {
    path: 'researcher-edit',
    loadChildren: () =>
      import('./pages/researcher-edit/researcher-edit.module').then(
        (m) => m.ResearcherEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
