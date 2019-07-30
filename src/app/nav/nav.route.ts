import { Route } from '@angular/router';
import { NavComponent } from './nav.component';

export const navRoutes: Route = {
    path: '*',
    component: NavComponent,
    outlet: 'nav'
}