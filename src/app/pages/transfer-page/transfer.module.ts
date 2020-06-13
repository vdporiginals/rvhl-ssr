
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferPageComponent } from './transfer-page.component';
import { Routes, RouterModule } from '@angular/router';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferDetailComponent } from './transfer-detail/transfer-detail.component';

const routes: Routes = [
    {
        path: '',
        component: TransferPageComponent,
        data: {},
        children: [
            {
                path: '',
                component: TransferListComponent,
                pathMatch: 'full',
                // resolve: {
                //     userCategory: UserResolve
                // },
            },
            {
                path: ':id/:seo',
                pathMatch: 'full',
                component: TransferDetailComponent,
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
        TransferPageComponent,
        TransferListComponent,
        TransferDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class TransferModule { }
