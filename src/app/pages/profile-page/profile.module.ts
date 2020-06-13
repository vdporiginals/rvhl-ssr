
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilePageComponent,
    }
];

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class ProfileModule { }
