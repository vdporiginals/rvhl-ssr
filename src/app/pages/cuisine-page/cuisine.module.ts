
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CuisinePageComponent } from './cuisine-page.component';
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CuisinePageComponent,
        data: {},
        children: [
            {
                path: '',
                component: CuisineListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: CuisineDetailComponent,
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
        CuisinePageComponent,
        CuisineListComponent,
        CuisineDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class CuisineModule { }
