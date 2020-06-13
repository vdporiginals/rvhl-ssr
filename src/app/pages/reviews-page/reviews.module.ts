
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsPageComponent } from './reviews-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsDetailComponent } from './reviews-detail/reviews-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ReviewsPageComponent,
        data: {},
        children: [
            {
                path: '',
                component: ReviewsListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: ReviewsDetailComponent,
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
        ReviewsPageComponent,
        ReviewsListComponent,
        ReviewsDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class ReviewsModule { }
