import { SaurabhComponent } from './component/saurabh.component';
import {provideRouter} from '@angular/router';

const APP_ROUTES =[
    {path:'directory',component:SaurabhComponent},


];


export const APP_ROUTES_PROVIDER =[
    provideRouter(APP_ROUTES)
];