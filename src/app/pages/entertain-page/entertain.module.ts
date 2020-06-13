
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntertainPageComponent } from './entertain-page.component';
import { EntertainListComponent } from './entertain-list/entertain-list.component';
import { EntertainDetailComponent } from './entertain-detail/entertain-detail.component';

const routes: Routes = [
    {
        path: '',
        component: EntertainPageComponent,
        data: {},
        children: [
            {
                path: '',
                component: EntertainListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: EntertainDetailComponent,
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
    EntertainPageComponent,
    EntertainListComponent,
    EntertainDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class EntertainModule { }
