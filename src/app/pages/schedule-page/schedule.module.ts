
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulePageComponent } from './schedule-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

const routes: Routes = [
    {
        path: '',
        component: SchedulePageComponent,
        data: {},
        children: [
            {
                path: '',
                component: ScheduleListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: ScheduleDetailComponent,
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
        SchedulePageComponent,
        ScheduleListComponent,
        ScheduleDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class ScheduleModule { }
