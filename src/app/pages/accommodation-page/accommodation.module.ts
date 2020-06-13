
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationPageComponent } from './accommodation-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';

const routes: Routes = [
    {
        path: '',
        component: AccommodationPageComponent,
        data: {},
        children: [
            {
                path: '',
                component: AccommodationListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: AccommodationDetailComponent,
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
        AccommodationPageComponent,
        AccommodationListComponent,
        AccommodationDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class AccommodationModule { }
