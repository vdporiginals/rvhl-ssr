
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourPageComponent } from './tour-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';

const routes: Routes = [
    {
        path: '',
        component: TourPageComponent,
        data: {},
        children: [
            {
                path: '',
                component: TourListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: TourDetailComponent,
                data: {
                    breadcrumb: '',
                    queryBanner: 'ReviewPage',
                },
                // resolve: {
                //     userpost: UserPostResolve
                // },
            },
        ]
    }
];
@NgModule({
    declarations: [
        TourPageComponent,
        TourListComponent,
        TourDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class TourModule { }
