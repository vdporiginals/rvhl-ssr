import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, {
    path: 'home',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },

  {
    path: 'accommodation', loadChildren: () => import('./pages/accommodation-page/accommodation.module').then(m => m.AccommodationModule),
    data: {
      breadcrumb: 'Ở đâu',
    },
  },
  {
    path: 'cuisine', loadChildren: () => import('./pages/cuisine-page/cuisine.module').then(m => m.CuisineModule),
    data: {
      breadcrumb: 'Ăn gì ngon',
    }
  },
  {
    path: 'entertain', loadChildren: () => import('./pages/entertain-page/entertain.module').then(m => m.EntertainModule),
    data: {
      breadcrumb: 'Chơi đâu vui'
    }
  },
  {
    path: 'travel-schedule', loadChildren: () => import('./pages/schedule-page/schedule.module').then(m => m.ScheduleModule),
    data: {
      breadcrumb: 'Lịch trình',
    },
  },
  {
    path: 'tours', loadChildren: () => import('./pages/tour-page/tour.module').then(m => m.TourModule),
    data: {
      breadcrumb: 'Tour',
    },
  },
  {
    path: 'reviews', loadChildren: () => import('./pages/reviews-page/reviews.module').then(m => m.ReviewsModule),
    data: {
      breadcrumb: 'Reviews du lịch Hạ Long'
    }
  },
  { path: 'profile', loadChildren: () => import('./pages/profile-page/profile.module').then(m => m.ProfileModule), canActivate: [] },
  { path: '404', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
